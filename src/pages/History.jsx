import React, { useState } from 'react'
import '../assets/css/history.css'


const History = () => {
    const [param, setParam] = useState("today");
    return (
        <div className='py-4 container history' style={{ minHeight: '50vh' }}>
            <h1 className="mb-4 mb-sm-5 text-center gradient-text">History</h1>
            <div className="d-flex mb-3">
                <p
                    className={`historyTitle me-2 me-sm-4   ${param == "today" ? "active" : ""}`}
                    onClick={() => setParam("today")}
                >Today</p>
                <p
                    className={` historyTitle me-2 me-sm-4 ${param == "yesterday" ? "active" : ""}`}
                    onClick={() => setParam("yesterday")}
                >Yesterday</p>
                <p
                    className={`historyTitle me-2 me-sm-4 ${param == "this_week" ? "active" : ""}`}
                    onClick={() => setParam("this_week")}
                >This Week</p>
                <p
                    className={`historyTitle  ${param == "last_week" ? "active" : ""}`}
                    onClick={() => setParam("last_week")}
                >Last Week</p>
            </div>
            <div className="table-responsive text-center">
                <table className="table table-transparent">
                    <thead>
                        <tr>
                            <th>နံပါတ်</th>
                            {/* <th>ဂိမ်းအခြေအနေ</th> */}
                            <th>အပိတ်လက်ကျန်</th>
                            <th>အမျိုးအစား</th>
                            <th>ပမာဏ (ကျပ်)</th>
                            <th>အချိန်</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {/* <th>ဂိမ်းအခြေအနေ</th> */}
                            <td>400</td>
                            <td>Slot</td>
                            <td>500</td>
                            <td>12:00</td>
                        </tr>
                    </tbody>
                </table>



            </div>

        </div>
    )
}

export default History