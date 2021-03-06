// SERVER
export const SERVER_PORT = 8888

// API
export const API_ENDPOINT = 'https://timetable.nycu.edu.tw/?r=main/'
export const API_THROTTLE = 1200
export const API_CACHE_TIMEOUT = 30 // days

// REDIS
export const REDIS_ENDPOINT = process.env.REDIS_ENDPOINT ?? '127.0.0.1'