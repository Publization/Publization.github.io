import React, { useRef, useEffect } from 'react';
import TruckImg from '../Images/FastnD_Truck.jpg';
import TruckChart from '../Images/Truck_Chart.png';
import BuyingPaper from '../Images/Buying_Paper.png';
import Burger1 from '../Images/Burger1.jpg';
import Sandwesh from '../Images/Sandwesh.jpg';
import Pizza from '../Images/Pizza.jpg';
import Drink from '../Images/Drink.jpg';
import Cake from '../Images/Cake.jpg';
import Cupcakes from '../Images/Cupcakes.jpg';
import IceCream from '../Images/IceCream.jpg';
import Meal from './Meal.js';
import WeEat from './WeEat.js';
import Dessert from './Dessert.js';
import Title from './Title.js';
import './FastBody.css';


const flex_SpcBtwen = {display: "flex", justifyContent: "space-between"};

function FastBody () {
    const truck = useRef(null);

    const truckSize = () => {
        truck.current.style.height = truck.current.offsetWidth + "px";
    };

    window.onresize = truckSize;
    useEffect(() => {
        truckSize();
    }, []);
    return (
        <div className="FastBody">
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div className="DText-Cont">
                    <div className="DText">
                        The Fast and the <span className="Pink">Delicious!</span>
                    </div>
                    <div className="Pink DText UnderScore">
                        _
                    </div>
                    <div className="NoteText DTextNText">
                        Something Text Here, i love eating so much Thank you so much.
                    </div>
                </div>
                <img ref={truck} src={TruckImg} className="FastnD-Truck" />
            </div>

            <div className="FastBody-Body">
                <div>
                    <Title Title="Are you hungry?" Desc="" />
                    <div className="Hungry-Steps" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <div>
                            <img src={Sandwesh} />
                            <div>
                                1. Choose your <span className="Pink">food</span>
                            </div>
                        </div>
                        <div>
                            <img src={BuyingPaper} />
                            <div>
                                2. Make your <span className="Pink">order</span>
                            </div>
                        </div>
                        <div>
                            <img src={TruckChart} />
                            <div>
                                3. Receive your <span className="Pink">meal</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Title Title="Our suggestions!" Desc="" />
                    <div className="Meals-Cont">
                        <Meal
                            Dir="ltr"
                            ImgSrc={Burger1}
                            Name="Complete Cangre Burguer"
                            Desc="ewqeq qweqwe sdsauhd asduh asduhk asdho asdoasd sadasoihd iwwe qaweqweq qweqweqwe qweqweqweqw" Rate={4}
                            Price={320}
                        />
                        <Meal
                            Dir="rtl"
                            ImgSrc={Pizza}
                            Name="Super Extra Muzzarella Pizza"
                            Desc="ewqeq qweqwe sdsauhd asduh asduhk asdho asdoasd sadasoihd iwwe qaweqweq qweqweqwe qweqweqweqw" Rate={3}
                            Price={280}
                        />
                        <div style={{display: "flex", justifyContent: "center"}} className="Read-Sug">
                            <a href="#" className="Btn" style={{textDecoration: "none"}}>Read all suggestions</a>
                        </div>
                    </div>
                </div>

                <div>
                    <Title Title="What're we eatin'?" Desc="" />
                    <div className="WeEat-Cont">
                        <WeEat ImgSrc={Pizza} Name="Saltyworld" Desc="ewqeq qweqwe sdsauhd asduh asduhk asdho asdoasd sadasoihd iwwe qaweqweq qweqweqwe qweqweqweqw" />
                        <WeEat ImgSrc={Drink} Name="Drink Ocean" Desc="ewqeq qweqwe sdsauhd asduh asduhk asdho asdoasd sadasoihd iwwe qaweqweq qweqweqwe qweqweqweqw" />
                        <WeEat ImgSrc={Burger1} Name="Sandwichrama" Desc="ewqeq qweqwe sdsauhd asduh asduhk asdho asdoasd sadasoihd iwwe qaweqweq qweqweqwe qweqweqweqw" />
                    </div>
                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}} className="Dessert-Cont">
                    <Title Title="What's for dessert?" Desc="qweqweqwe qaeqweqwe asd qweqweqwe qweqwe wqe qwe qaw eqwe qw ewq ewq eq eqwe qasdsad sadasd asdsada" />
                    <div className="Desserts">
                        <div style={flex_SpcBtwen}>
                            <Dessert ImgSrc={Cake} Name="Cakes" />
                            <Dessert ImgSrc={Cupcakes} Name="Cupcakes" />
                        </div>
                        <div style={flex_SpcBtwen}>
                            <Dessert ImgSrc={IceCream} Name="Ice Cream" />
                            <Dessert ImgSrc={Drink} Name="Milkshakes" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FastBody;
