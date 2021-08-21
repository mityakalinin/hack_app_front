
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://0.0.0.0:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  signUp(name, email, password, status) {
    return apiClient.post('/api/signup', name, email, password, status)
  },
  logIn(username, password) {
    return apiClient.post('/login', username, password)
  },
  logOut() {
    return apiClient.get('/logout')
  },
  getUser(token) {
    return apiClient.get('/api/user?token=' + token)
  },
  getEvents(from, to) {
    return apiClient.get('/api/events?from=' + from + '&to' + to)
  },
  getEvent(id) {
    return apiClient.get('/api/event/' + id)
  },
  createEvent(event) {
    return apiClient.post('/api/events', event)
  },
  deleteEvent(id) {
    return apiClient.delete('/api/event/' + id)
  },
  getChecks(user, payed) {
    return apiClient.get('/api/check?user=' + user + '&payed' + payed)
  },
  createCheck(check) {
    return apiClient.post('/api/checks', check)
  },
  getNotifications(user) {
    return apiClient.get('/api/notifications?user=' + user)
  },
  createNotification(notification) {
    return apiClient.post('/api/notifications', notification)
  }
}