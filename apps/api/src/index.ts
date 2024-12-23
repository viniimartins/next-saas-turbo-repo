import { ability } from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOthersUsers = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteOthersUsers)
