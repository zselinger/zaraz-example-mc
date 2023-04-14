import { Manager } from '@managed-components/types'

export default async function (manager: Manager) {
  manager.addEventListener('pageview', event => {
    console.log('Hello from Zaraz Example MC')

    const { client } = event

    const dateToday = new Date().toDateString()

    client.execute(`console.log("${dateToday}")`)
  })
}
