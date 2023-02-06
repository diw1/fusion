import { useState, useEffect } from 'react'
import { getEventTasks, getEventObjects } from '@/services/dashboard'

export default () => {
    const [events, setEvents] = useState([])
    const [oldEvents, setOldEvents] = useState([])
    const [newEvents, setNewEvents] = useState([])
    const [objects, setObjects] = useState([])
    const [loading, setLoading] = useState(true)

    const getTasks = () => getEventTasks().then(res => {
        const filteredRes = res?.results?.map(result=>({
            id: result.id,
            name: result.sponsorObjects[0]?.name,
            eventName: result.eventName,
            startsAt: result.startsAt,
            modifiesAt: result.modifiesAt,
            sponsorId: result.sponsorObjects[0]?.id,
            deviceName: result.sponsorObjects[0]?.devices[0]?.name
        }))
        setEvents(filteredRes)
        setLoading(false)
    })

    useEffect(() => {
        getTasks()
        getEventObjects().then(res=>
        {
            setObjects(res.results)
        })
    }, [])

    return {
        events,
        newEvents,
        objects,
        loading,
        getTasks,
    }
}
