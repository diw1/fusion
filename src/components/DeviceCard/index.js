import { Card, Col, Row, Typography, Badge } from 'antd';
import './index.less';
import PropTypes from 'prop-types';
import Fall from '../../assets/images/fall_down.svg';
import Entry from '../../assets/images/entry_exit.png';
import Overtime from '../../assets/images/overtime.png';
import Breathing from '../../assets/images/breathing.png';

const DeviceCard = (props) => {
  const { device } = props;

  return (
    <Card
      title={device.name}
      className="device-card"
      extra={
        device.name === 'Bed02' ? (
          <Badge status="success" text="ONLINE" />
        ) : (
          <Badge status="error" text="OFFLINE" />
        )
      }
    >
      <Row>
        <Col span={12} className={`${device.fall ? 'offline blink' : ''} `}>
          <Typography.Title level={4} style={{ marginTop: '8px' }}>
            Fall Detection
          </Typography.Title>
          <Row wrap={false}>
            <Col>
              <img src={Fall} width={70} alt="fall" />
            </Col>
            {device.fall && <Col className="time">{device.fallTime}</Col>}
          </Row>
        </Col>
        <Col span={12}>
          <Typography.Title level={4} style={{ marginTop: '8px' }}>
            Entry/Exit
          </Typography.Title>
          <Row wrap={false}>
            <Col>
              <img
                src={Entry}
                width={90}
                alt="entry"
                style={{ margin: '-10px 0 0 -10px' }}
              />
            </Col>
          </Row>
        </Col>
        {device.name.includes('Bed') && (
          <Col span={12}>
            <Typography.Title level={4} style={{ marginTop: '8px' }}>
              Breathing
            </Typography.Title>
            <Row wrap={false}>
              <Col>
                <img src={Breathing} width={70} alt="breathing" />
              </Col>
            </Row>
          </Col>
        )}
        {device.name.includes('Bath') && (
          <Col span={12} className={`${device.timeout ? 'offline' : ''} `}>
            <Typography.Title level={4} style={{ marginTop: '8px' }}>
              Overtime
            </Typography.Title>
            <Row wrap={false}>
              <Col>
                <img src={Overtime} width={70} alt="fall" />
              </Col>
              {device.timeout && <Col>{device.timeoutTime}</Col>}
            </Row>
          </Col>
        )}
      </Row>
    </Card>
  );
};

DeviceCard.propTypes = {
  device: PropTypes.object,
  getTasks: PropTypes.func,
};

export default DeviceCard;
