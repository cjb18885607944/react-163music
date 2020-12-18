import {getSizeImage,formatMinuteSecond} from '@/utils/format-utils'
import {PlayCircleOutlined} from '@ant-design/icons';
export const columns=[
    {
        title: '',
        dataIndex: 'id',
        key: 'id',
        className:'current-index',
        width:78,
        render: (text, record, index) => <span>{index+1}</span>,
    },
    {
        title: '标题',
        dataIndex: 'name',
        key: 'name',
        className:'song-info-name',
        width:327,
        ellipsis: true,
        render: (text, record, index) => {
            if(index < 3){
                return(
                    <div>
                        <img src={getSizeImage(record.al.picUrl,50)}></img> 
                        <PlayCircleOutlined />
                        <span>{text}</span>
                        {record.mv!==0 && <span className="mv sprite_table"></span>}
                    </div>
                )
            }else{
                return(
                    <div>
                        <PlayCircleOutlined />
                        <span>{text}</span>
                    </div>
                )
            }
        },
    },
    {
        title: '时长',
        dataIndex: 'dt',
        key: 'dt',
        className:'song-time',
        width:91,
        render: (text, record, index) => <span>{formatMinuteSecond(text)}</span>,
    },
    {
        title: '歌手',
        dataIndex: 'cp',
        key: 'cp',
        className:'singer',
        width:173,
        ellipsis: true,
        render: (text, record, index) => {
            let singer = ''
            record.ar.forEach((item,current) => {
                if(current < record.ar.length-1){
                    singer += (item.name+'/')
                }else{
                    singer += item.name
                }
            })
            return singer
        },
    },
]