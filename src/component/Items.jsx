import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './style.css';

function Items() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [searchData, setSearchData] = useState("");

    const [color1, setColor1] = useState('#0B69FF');
    const [textColor1, setTextColor1] = useState('white');

    const [color2, setColor2] = useState('white');
    const [textColor2, setTextColor2] = useState('black');

    const [color3, setColor3] = useState('white');
    const [textColor3, setTextColor3] = useState('black');

    let componentMounted = true;

    useEffect(() => {
        const getItems = async () => {
            setLoading(true);
            const response = await fetch("https://media-content.ccbp.in/website/react-assignment/resources.json");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getItems();

    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-4">
                    <Skeleton height={250} />
                </div>
                <div className="col-md-4">
                    <Skeleton height={250} />
                </div>
                <div className="col-md-4">
                    <Skeleton height={250} />
                </div>
            </>
        )
    }

    const filterItem = (item_tag) => {
        const updatedList = data.filter((x) => x.tag === item_tag)
        setFilter(updatedList);
    }

    const handleSearch = (e) => {
        if (e.target.value === '') {
            setFilter(data);
        }

        else {
            const searchResult = filter.filter((x) => x.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setFilter(searchResult);
        }
        setSearchData(e.target.value)
    }

    const ShowItems = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-4 pb-4">
                    <div className="btn btn-sm resource-btn" style={{ background: color1, color: textColor1 }} id="resourceBtn" onClick={() => { setColor1("#0B69FF"); setTextColor1('white'); setColor2('white'); setTextColor2('black'); setColor3('white'); setTextColor3('black'); setFilter(data); }}>Resources</div>
                    <div className="btn btn-sm request-btn" style={{ background: color2, color: textColor2 }} id="requestBtn" onClick={() => { setColor2("#0B69FF"); setColor1('white'); setColor3('white'); setTextColor1('black'); setTextColor2('white'); setTextColor3('black'); filterItem("request"); }}>Requests</div>
                    <div className="btn  btn-sm user-btn" style={{ background: color3, color: textColor3 }} id="userBtn" onClick={() => { setColor3("#0B69FF"); setColor1('white'); setColor2('white'); setTextColor1('black'); setTextColor2('black'); setTextColor3('white'); filterItem("request"); filterItem("user") }} >Users</div>
                </div>

                <div class="input-group input-group-sm mb-4 pb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fa fa-search" id="searchIcon" aria-hidden="true"></i></span>
                    </div>
                    <input type="search" class="form-control" id="searchBox" placeholder="Search" value={searchData} onInput={(e) => handleSearch(e)} />
                </div>

                {filter.map((item) => {
                    return (
                        <>
                            <div className="col-md-4 mb-4">
                                <div class="card h-100 p-4" key={item.id}>
                                    <div class="card-body">
                                        <div className="d-flex">
                                            <img src={item.icon_url} width="40px" height="40px" alt='' />
                                            <div>
                                                <h5 class="small mx-2" id="item-title">{item.title}</h5>
                                                <h6 class="small mx-2" id="item-cat">{item.category}</h6>
                                            </div>
                                        </div>
                                        <a href="#" class="small card-link my-4 py-4" id="item-link">{item.link}</a>
                                        <p class="small my-4" id="item-description">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>

        )

    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowItems />}
                </div>
            </div>
        </div>
    )
}

export default Items