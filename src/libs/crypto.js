import crypto from 'crypto'

export default function crypt(){
    return crypto.randomBytes(10).toString('hex')
}
