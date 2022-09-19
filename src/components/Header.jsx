import logo from '../assets/productwhite.png';
const Header = () => {
    return (
        <>
            <div className="header">
                <div style={{ display: 'flex' }}> <img src={logo} alt="logo" style={{ width: 45,height:45, margin: '5px 0', }} />
                    <div className='mid'>LeanPitch</div>
                </div>
                <div style={{ display: 'flex', }}>
                    <div  style={{backgroundColor:'orangered',margin:'0 20px',width:'100px',paddingTop:'15px'}}><a className='cursor'> Subscribe</a> </div>
                    <div className='mid'> <a className='cursor' style={{olor:'#fff'}} href="#">Contact US</a>  </div>
                </div>
            </div>

        </>
    )

};

export default Header;