import { PageContainer } from '@ant-design/pro-components'
import { useModel } from '@umijs/max'
import styles from './index.less'
import {Col, Row, Card} from 'antd'
import DeviceCard from '../../components/DeviceCard'
import AutoRefreshComponent from '../../components/AutoRefreshComponent'

const mergeEvent = (events,objects) => {
    return objects.map(object=>{
        events.filter(event=>event.sponsorId===object.id)?.map(event=>{
            if (event.eventName.includes('Timeout')){
                object.timeout = true
                object.timeoutTime = event.startsAt
            }else if (event.eventName.includes('Fall')){
                object.fall = true
                object.fallTime = event.startsAt
                object.fallId = event.id
            }else if (event.eventName.includes('Offline')){
                object.offline = true
                object.offlineTime = event.startsAt
            }else if (event.eventName.includes('Abnormal')){
                object.abnormal = true
            }
            return true
        })
        return object
    })
}

const Dashboard = () => {
    const {events, objects, getTasks} = useModel('dashboard')

    const combinedObjects = mergeEvent(events,objects)
    console.log(events, objects, combinedObjects)

    const renderCards = (objects) => {
        return <Row gutter={[20,20]}>
            {objects.map(object=><Col xs={{span: 24}} lg={{span: 12}} xl={{span: 8}} xxl={{span: 6}} key={object.id}>
                <DeviceCard device={object} getTasks={getTasks}/>
            </Col>)}
        </Row>

    }

    // useEffect(()=>{dispatch({ type: 'query' })},[])
    return (
        <PageContainer ghost>
            <Card title='Radar Dashboard' extra={<AutoRefreshComponent refresh={getTasks}/>}>
                {renderCards(objects)}
            </Card>
        </PageContainer>
    )
}

export default Dashboard
