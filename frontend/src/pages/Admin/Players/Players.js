import './Players.style.scss';
import { useState } from 'react';
import {Row, Col, Select, Input} from 'antd'
import { SearchIcon } from '../../../icons/Icons'
import CardPlayer from '../../../components/CardPlayer/CardPlayer';

const { Option } = Select;

const teams = [
    {
        id: 1,
        nickname: 'Manchester United'
    }, {
        id: 2,
        nickname: 'Chelsea'
    }, {
        id: 3,
        nickname: 'Manchester City'
    }, {
        id: 4,
        nickname: 'Arsenal'
    }, {
        id: 5,
        nickname: 'Liverpool'
    }, {
        id: 6,
        nickname: 'Tottenham'
    }, {
        id: 7,
        nickname: 'Everton'
    }, {
        id: 8,
        nickname: 'Aston Villa'
    }
]

const players = [
    {
        id: 1,
        name: 'Ronaldo',
        team: 'Manchester United',
        number: 7,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Critiano Ronaldo',
        national: 'Portal'
    }, {
        id: 2,
        name: 'Messi',
        team: 'Paris Saint Germain',
        number: 30,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    }, {
        id: 3,
        name: 'abc',
        team: 'MU',
        number: 1,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    }, {
        id: 4,
        name: 'abc',
        team: 'MU',
        number: 1,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    } , {
        id: 5,
        name: 'abc',
        team: 'MU',
        number: 1,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    } ,{
        id: 6,
        name: 'abc',
        team: 'MU',
        number: 1,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    } ,{
        id: 7,
        name: 'abc',
        team: 'MU',
        number: 1,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    } ,{
        id: 8,
        name: 'abc',
        team: 'MU',
        number: 1,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    }, {
        id: 9,
        name: 'abc',
        team: 'MU',
        number: 1,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    }, {
        id: 10,
        name: 'abc',
        team: 'MU',
        number: 1,
        position: 'FW',
        avatar: './hidden.jpeg',
        when: '01/01/1988',
        fullname: 'Leo Messi',
        national: 'Argentina'
    } 
]
const Players = () => {
    const [club, setClub] = useState(teams[0].nickname)
    

    const handleChange = (value) => {
        console.log(value);
        setClub(value);
    }
    const handleSearch = (e) => {
        const { value } = e.target;
        console.log(value);
    }

    
    return (
        <div className="wrapper-player">
            <div
                className='header'
            >
                <div className='title'>Danh sách cầu thủ</div>
            </div>
            <div className='content-players'>
                <div className='tool-filter'>
                    <Input.Search
                        allowClear
                        className='layout-search-input'
                        onChange={handleSearch}
                        style={{ width: 200 }}
                        size='medium'
                        placeholder='検索'
                        enterButton='検索'
                        prefix={<SearchIcon />}
                    />
                    <Select
                    defaultValue={club}
                    style={{ width: 200 }}
                    onChange={handleChange}
                    >
                        {teams.map(item => {
                            return (
                                <Option value={item.nickname}>{item.nickname}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className='main-content'>
                    <Row>
                        {players.map((item, idx) => {
                            return (
                                <Col lg={6} md={8} xs={24}>
                                    <CardPlayer data={item} key={idx}></CardPlayer >
                                </Col>
                            )
                        })} 
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Players;