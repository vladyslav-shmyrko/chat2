window._ = require('lodash');
import Socketio from "socket.io-client";

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

import Echo from "laravel-echo"

// window.io = require('socket.io-client');
//
// window.Echo = new Echo({
//     broadcaster: 'socket.io',
//     host: window.location.hostname + ':6001'
// });



// window.io = require('socket.io-client')
const client = window.io = require('socket.io-client')

// window.Echo = new Echo({
//     broadcaster: 'socket.io',
//     // host: process.env.MIX_APP_URL + ':6001'
//     host: window.location.hostname + ':6001',
//     // host: 'http://localhost:6001',
//     transports: ['websocket']
// })

// let echo = new Echo({
//     broadcaster: 'socket.io',
//     client: Socketio,
//     host: window.location.hostname + ':6001'
// });
//
//
// echo.channel('chat').listen('MessageSent', (e) => {
//     console.log(e)
//     // setMessages(messages.push(e))
// })

// let echo = new Echo({
//     broadcaster: 'socket.io',
//     client: Socketio,
//     transports: ['websocket'],
//     host: window.location.hostname + ':6001'
// });
//
// echo.channel('chat').listen('.room.chat', (e) => {
//     console.log(e)
//     // setMessages(messages.push(e))
// })
