const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.append('Surrogate-Control', 'content="ESI/1.0"')
    res.sendFile('esi-test.html', {root: __dirname})
})

app.listen(8787, () => console.log('ESI test app listening on port 8787!'))