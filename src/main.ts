import './assets/main.css'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCloud, faLock, faNetworkWired, faShieldVirus } from '@fortawesome/free-solid-svg-icons'
library.add(faShieldVirus, faCloud, faNetworkWired,faLock)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.component('font-awesome-icon',FontAwesomeIcon)
.mount('#app')
