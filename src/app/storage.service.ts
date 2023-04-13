import {Injectable} from '@angular/core';
import {NotificationsService} from "./notifications.service";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {FormUser, SAVED_USERS_KEY} from "./user-form/user-form.component";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private savedUsers: FormUser[] = [];
  private usersSubject = new BehaviorSubject<FormUser[]>([])

  constructor(private notificator: NotificationsService) {
  }

  getAllUsers(): Observable<FormUser[]> {
    this.savedUsers = JSON.parse(localStorage.getItem(SAVED_USERS_KEY) ?? "[]");
    this.usersSubject.next(this.savedUsers)
    return this.usersSubject.asObservable();
  }

  createUser(newUser: FormUser) {
    let isUserCreated = false;
    let isFound = this.savedUsers.find(user => user.id == newUser.id) != undefined
    if (isFound) {
      return of(isUserCreated)
    }
    this.savedUsers.push(newUser);
    this.saveUsersToLocalStorage()
    isUserCreated = true;
    return of(isUserCreated)

  }

  updateUser(updatedUser: FormUser): Observable<boolean> {
    let isUpdateSuccessful = false;
    for (let i = 0; i < this.savedUsers.length; i++) {
      if (this.savedUsers[i].id == updatedUser.id) {
        this.savedUsers[i] = updatedUser
        this.saveUsersToLocalStorage()
        isUpdateSuccessful = true
      }
    }
    return of(isUpdateSuccessful)
  }

  deleteUser(id: number) {
    this.savedUsers = this.savedUsers.filter(function (item) {
      return item.id !== id
    })
    this.saveUsersToLocalStorage()
  }

  getUserById(id: number): Observable<FormUser>{
    return of(this.savedUsers.find(user => user.id == id))
  }

  private saveUsersToLocalStorage() {
    localStorage.setItem(SAVED_USERS_KEY, JSON.stringify(this.savedUsers))
    this.usersSubject.next(this.savedUsers)
  }
}
