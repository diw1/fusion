import {Button, Card, Col, Row, Typography, notification} from 'antd'
import './index.less'
import PropTypes from 'prop-types'
import Fall from '../../assets/images/fall_down.svg'
import {patchEventTask} from '../../services/dashboard'

const DeviceCard = (props) => {
    const {device, getTasks} = props
    const successNotification = (title) => {
        notification.success({message: title,})
    }

    const resolveFall = () => {
        const payload = [{
            id: device.fallId,
            action: 30,
            description: 'resolve'
        }]
        patchEventTask(payload).then(()=> {
            getTasks()
            successNotification('Fall resolved')
        }
        )
    }
    return (
        <Card
            title={device.name}
            className='DeviceCard'
        >
            <Row>
                <Col span={12} style={{textAlign: 'center'}} className={device.fall ? 'fall':''}>
                    <Typography.Title level={5}>
                            Fall Detect
                    </Typography.Title>
                    <div>
                        <img src={Fall} width={70} alt="fall"/>
                    </div>
                    {device.fall && <>
                        <div>
                        Time: {device.fallTime}
                        </div>
                        <div style={{textAlign: 'end'}}>
                            <Button className='resolveButton' type="primary" size="small" onClick={resolveFall}>Resolve</Button>
                        </div>
                    </>}

                </Col>
                <Col span={12} style={{textAlign: 'center'}}>
                    <Typography.Title level={5}>
                            Entry/Exit Time
                    </Typography.Title>
                </Col>
                {/*<Col span={12} style={{textAlign: 'center'}} className={device.offline ? 'offline':''}>*/}
                {/*    <Typography.Title level={5}>*/}
                {/*            Breathing*/}
                {/*    </Typography.Title>*/}
                {/*    {device.offline && <>*/}
                {/*        <div>*/}
                {/*            Time: {device.offlineTime}*/}
                {/*        </div>*/}
                {/*    </>}*/}
                {/*</Col>*/}
                <Col span={12} style={{textAlign: 'center'}} className={device.timeout ? 'fall':''}>
                    <Typography.Title level={5}>
                            Overtime
                    </Typography.Title>
                    {device.timeout && <>
                        <div>
                            Time: {device.timeoutTime}
                        </div>
                    </>}
                </Col>
            </Row>
        </Card>
    )
}

DeviceCard.propTypes = {
    device: PropTypes.object,
    getTasks: PropTypes.func,
}

export default DeviceCard
