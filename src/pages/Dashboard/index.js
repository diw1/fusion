import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Col, Row, Card, Space, notification, Typography } from 'antd';
import DeviceCard from '../../components/DeviceCard';
import AutoRefreshComponent from '../../components/AutoRefreshComponent';
import Logo from '@/assets/images/logo.svg';

const mergeEvent = (events, objects) => {
  let newEvents = objects
    .map((object) => {
      events
        .filter((event) => event.sponsorId === object.id)
        ?.map((event) => {
          if (event.eventName.includes('Timeout')) {
            object.timeout = true;
            object.timeoutTime = event.startsAt;
          } else if (event.eventName.includes('Fall')) {
            object.fall = true;
            object.fallTime = event.startsAt;
            object.fallId = event.id;
          } else if (event.eventName.includes('Offline')) {
            object.offline = true;
            object.offlineTime = event.startsAt;
          } else if (event.eventName.includes('Abnormal')) {
            object.abnormal = true;
          }
          return true;
        });
      return object;
    })
    .sort((a, b) => a.id - b.id);

  newEvents.splice(1, 0, {
    id: 555,
    name: 'Bath01',
  });

  newEvents.splice(3, 0, {
    id: 556,
    name: 'Bath02',
  });

  newEvents.splice(4, 0, {
    id: 557,
    name: 'Bed03',
  });

  newEvents.splice(6, 0, {
    id: 558,
    name: 'Bed04',
  });

  return newEvents.concat(
    [...Array(8)].map((_, i) => ({
      id: i + 563,
      name:
        i % 2 !== 0
          ? `Bath${Math.floor(i / 2 + 4).toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}`
          : `Bed${Math.floor(i / 2 + 4).toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}`,
    })),
  );
};

const Dashboard = () => {
  const { events, objects, getTasks, newEvents } = useModel('dashboard');
  const combinedObjects = mergeEvent(events, objects);

  newEvents?.reverse().map((event) =>
    notification.warning({
      message: `${event.name} ${event.eventName}`,
      description: <Space direction="vertical">{event.startsAt}</Space>,
      duration: 0,
    }),
  );

  const renderTitle = (
    <Row align="middle">
      <Col>
        <img src={Logo} alt="logo" />
      </Col>
      <Col>
        <Typography.Title level={1}>Radar Monitor</Typography.Title>
      </Col>
    </Row>
  );

  const renderCards = (objects) => {
    return (
      <Row gutter={[20, 20]}>
        {objects.map((object) => (
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 8 }}
            xxl={{ span: 6 }}
            key={object.id}
          >
            <DeviceCard device={object} getTasks={getTasks} />
          </Col>
        ))}
      </Row>
    );
  };

  // useEffect(()=>{dispatch({ type: 'query' })},[])
  return (
    <PageContainer ghost>
      <Card
        bordered={false}
        headStyle={{ border: 'none' }}
        style={{ background: 'black' }}
        title={renderTitle}
        extra={<AutoRefreshComponent refresh={getTasks} />}
        bodyStyle={{ padding: 0 }}
      >
        {renderCards(combinedObjects)}
      </Card>
    </PageContainer>
  );
};

export default Dashboard;
