import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function TodoList() {
  const [todo, setTodo] = useState('')
  const [ , setPrioty] = useState('Medium')

  const handleTodo = (e) => {
    setTodo(e.target.value)
  }

  const handlePriority = (value) => {
    console.log(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' />
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todo} onChange={handleTodo}/>
          <Select onChange={handlePriority} defaultValue="Medium">
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
