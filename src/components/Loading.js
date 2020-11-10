import React, { useState } from 'react';
// import OldMap from './OldMap';
// import Map from '../common/Map';
// import Graph from '../common/Graph';
import About from './not_use/common/About';
// import FiltersForm from './FilterForm';
import 'antd/dist/antd.css';
// import '../../styles/index.css';
import { Tabs, Button, Popover } from 'antd';
import Filter_forms from './Filter_forms';
const Loading = () => {
  const { TabPane } = Tabs;

  const openFilters = (
    <Popover
      placement="bottomRight"
      title={<span></span>}
      content={<Filter_forms />}
      trigger="click"
    >
      <Button type="link">Open Filters</Button>
    </Popover>
  );

  return (
    <div>
      <main>
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="large"
          tabBarExtraContent={openFilters}
        >
          {/* <TabPane tab="Map" key="1">
            <div id="map" style={{ display: 'block' }}>
              {<Map />}
            </div>
          </TabPane>
          <TabPane tab="Graph" key="2" style={{ backgroundColor: '#191a1a' }}>
            <div id="graph">{<Graph />}</div>
          </TabPane>
          <TabPane tab="About" key="3">
            <div id="about">{<About />}</div>
          </TabPane> */}
        </Tabs>
      </main>
      <footer className="page-footer">
        <small>© Copyright 2020. All rights reserved.</small>
        <ul></ul>
      </footer>
    </div>
  );
};

export default Loading;
