const os = require('os')

// info about the current user
const user = os.userInfo()
//console.log(user);

// synax to return the system runtime

//console.log(`the seconds run time is ${os.uptime}`)

const systemInfo = {
    name: os.version(),
    type: os.type(),
    totalMem: os.totalmem(),
    releaseDate: os.release(),
    freeMem: os.freemem(),
}
console.log(systemInfo);