import { Button, Dropdown, Menu, Progress, Row } from 'antd';
import { CaretDownOutlined, ReloadOutlined } from '@ant-design/icons';
import './index.less';
import { useEffect, useState } from 'react';

let intervalId = 0;

const AutoRefreshComponent = (props) => {
  const { refresh } = props;
  const [percent, setPercent] = useState(0);
  const [intervalSec, setIntervalSec] = useState(5);
  const [loading, setLoading] = useState(false);

  let remaining;

  const handleMenuClick = (e) => {
    const key = Number.parseInt(e.key);
    clearInterval(intervalId);
    setIntervalSec(key);
    if (key > 0) {
      startInterval(key);
    }
  };

  const timer = (intervalSec) => {
    remaining = remaining - 1;
    setPercent(((intervalSec - remaining) / intervalSec) * 100);
    if (remaining <= 0) {
      refresh && refresh();
      remaining = intervalSec;
    }
  };

  const handleRefreshButton = () => {
    if (refresh) {
      setLoading(true);
      refresh().finally(() => setTimeout(() => setLoading(false), 10000));
    }
    clearInterval(intervalId);
    if (intervalSec > 0) {
      startInterval(intervalSec);
    }
  };

  const startInterval = (interval) => {
    remaining = interval;
    intervalId = setInterval(() => timer(interval), 1000);
  };

  useEffect(() => {
    intervalSec > 0 && startInterval(intervalSec);
    // eslint-disable-next-line
    return () => clearInterval(intervalId);
  }, []);

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key={'0'}>Off</Menu.Item>
      <Menu.Item key={'5'}>5 secs</Menu.Item>
      <Menu.Item key={'10'}>10 secs</Menu.Item>
      <Menu.Item key={'30'}>30 secs</Menu.Item>
      <Menu.Item key={'60'}>60 secs</Menu.Item>
    </Menu>
  );

  return (
    <div className="autoRefreshComponent">
      <Row>
        <Button
          disabled={loading}
          icon={<ReloadOutlined />}
          style={{ borderRadius: 0 }}
          onClick={handleRefreshButton}
        />
        <Dropdown overlay={menu}>
          <Button icon={<CaretDownOutlined />} style={{ borderRadius: 0 }} />
        </Dropdown>
      </Row>
      <Row>
        {intervalSec > 0 && (
          <Progress percent={percent} status="active" showInfo={false} />
        )}
      </Row>
    </div>
  );
};

export default AutoRefreshComponent;
