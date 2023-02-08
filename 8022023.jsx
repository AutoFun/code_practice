import 'antd/dist/antd.css';
import React from 'react';
import {connect} from 'react-redux';
import {faChalkboard} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CountBar =(props)=>{
    const {currentCount,totalCount}=props;
    return (
        <div className="page_separator countBar_separator">
            <div className="separator_text">
                <div className="countBar_container">
                    <FontAwesomeIcon icon={faChalkboard} className="countBar_icon" />
                    <p>
                        <span className="countBar_filteredResults">{currentCount}</span>
                        <span className="countBar_divider">/</span>
                        <span className="countBar_totalResults">{totalCount}</span>
                        <span className="countBar_classes">classes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

const SearchBar=(props)=>{
    const{ setData }=props
    const [keyword,setKeyword] =useState([]);
    function onChangeKeyword(e) {
        setKeyword(e.target.value)
    }
    async function getDataByKeyword(){
        let res=''
        if(keyword===''){
            res=await getClassesInfo();
        } else{
            res=await getClassesByKeyword(keyword);
        }
        setData(res.data)
    }

    return(
        <Form className='searchBar' onFinish={getDataByKeyword}>
            <Form.Item name="keyword">
                <Input.Search
                 value={keyword}
                 placeholder="Search by tittle"
                 onChange={onChangeKeyword}
                 onPressEnter={getDataByKeyword}
                 onSearch={getDataByKeyword}
                 />
            </Form.Item>
        </Form>
    )
}












export default connect((state)=>({
    currentCount: state.classCount.currentCount,
    totalCount: state.classCount.totalCount,
}))(CountBar);


import 'antd/dist/antd.css'
import {Select} from 'antd';
import {getClassesInfo,getClassesByTeacher,getClassesByClassroom,getClassesBySelects} from '../../../../../api/api'

const {Option}= Select;
const SelectRoomBar =(props)=>{
    const { setdata,teacherId, setClassroomId, classrooms} = props;

    async function hanleSelect(value){
        setClassroomId(value);
        let res=[];
        if(value===''){
            if(teacherId===''){
                res=await getClassesInfo();
            } else {
                res=await getClassesByTeacher(teacherId);
            }
        } else if(teacherId===''){
            res= await getClassesByClassroom(value);
        } else {
            res=await getClassesBySelects(teacherId,value);
        }
        setData(res.data);
    }
    return (
        <Select
        className='list_header--dropdown'
        defaultValue='Classroom'
        onSlect={hanleSelect}
        >
            <Option className='list_option' value=''>All</Option>
        {
            classrooms.map(element=>(
                <Option className='list_option' key={element.id} value={element.id}>
                    {element.name}
                </Option>
            ))
        }
        </Select>
    )
}


class DashBoard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={
            infoList:[],
        };
    }

    componentDidMount(){
        showCurrentDayClasses().then((response)=>{
            if(response.status===200) {
                this.setState({
                    infoList:response.data.lessons,
                });
            }
        });
    }

    render() {
        const {infoList} =this.state;
        const lessonsNumber=infoList?.length;
        return (
            <div className="layout">
                <SideBar/>
                <div className="dashboard">
                    <Header />
                    <div className="dashboard_container">
                        <Overview lessonsNumber={lessonsNumber} />
                        <div className="separator_text">Today Lessons</div>
                    </div>
                    <h6>
                        THERE ARE &nbsp;
                        <span>{lessonsNumber}</span>
                        &nbsp; LESSONS TODAY
                    </h6>
                    {infoList?.map((item)=>(
                        <ClassListItem
                        key={item._id}
                        name={item.classes.name}
                        classId={item.classes.id}
                        teacher={item.teachers.name}
                        teacherId={item.teachers.id}
                        students={item.start_time}
                        endTime={item.end_time}
                        img={item.teachers.img}
                        />
                    ))}
                </div>
                <Footer/>
            </div>
        );
    }
}


