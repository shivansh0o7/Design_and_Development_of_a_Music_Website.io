import { useEffect, useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";
import { useDispatch} from "react-redux";
import { addToFav,removeToFav} from "../../store/FavSlice";
import "./kabir.css";

const Change1=({color1})=>{
  return(

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color1} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z"/></svg>
    )
  }
const Change2=({color2})=>{
  return(

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color2} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z"/></svg>
    )
  }
const Change3=({color3})=>{
  return(

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color3} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z"/></svg>
    )
  }
const Change4=({color4})=>{
  return(

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color4} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z"/></svg>
    )
  }
  const Change5 = ({ color5 }) => {
    return (
  
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color5} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z" /></svg>
    )
  }
  const Change6 = ({ color6 }) => {
    return (
  
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color6} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z" /></svg>
    )
  }
  const Change7 = ({ color7 }) => {
    return (
  
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color7} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z" /></svg>
    )
  }
  const Alert = ({ setClick }) => {
    return (
  
      <div className="alert">
        <nav>
          <h1>The Song is added to {<img src="favorite.png" alt="error" height={25} />}Favorite Song</h1>
          <span id="alert_heading">&#10003;</span>
          <div id="close" onClick={() => setClick(false)}><img src="close.png" alt="error" /></div>
        </nav>
      </div>
    )
  }

function Kabir()
{
    const kabir=[
        {
            "title":"Bekhayali",
            "music":"Music/Albums/Kabir Singh/Bekhayali.mp3",
            "img":"Albums/Kabir/Bekhayali.jpg",
            "artist":"Sachet Tandon",
            "duration":"02:54",
            "id":1
        },
        {
            "title":"kaise Hua",
            "music":"Music/Albums/Kabir Singh/Kaise Hua.mp3",
            "img":"Albums/Kabir/Kaise.jpg",
            "artist":"Vishal Mishra",
            "duration":"02:47",
            "id":2
        },
        {
            "title":"Pehla Pyaar",
            "music":"Music/Albums/Kabir Singh/Pehla Pyaar.mp3",
            "img":"Albums/Kabir/Pehla.jpg",
            "artist":"Armaan Malik",
            "duration":"04:32",
            "id":3
        },
        {
            "title":"Mere Sohneya",
            "music":"Music/Albums/Kabir Singh/Mere Sohneya.mp3",
            "img":"Albums/Kabir/Mere.jpg",
            "artist":"Sachet Tandon,Parampara Tandon",
            "duration":"03:11",
            "id":4
        },
        {
            "title":"Tera Ban Jaunga",
            "music":"Music/Albums/Kabir Singh/Tera Ban Jaunga.mp3",
            "img":"Albums/Kabir/Tera.jpg",
            "artist":"Akhil Sachdeva,Tulsi Kumar",
            "duration":"03:56",
            "id":5
        },
        {
            "title":"Tujhe Kitna Chahne Lage",
            "music":"Music/Albums/Kabir Singh/Tujhe Kitna Chahne Lage",
            "img":"Albums/Kabir/Tujhe.jpg",
            "artist":"Arijit Singh",
            "duration":"03:38",
            "id":6
        },
        {
            "title":"Yeh Aaina",
            "music":"Music/Albums/Kabir Singh/Yeh Aaina.mp3",
            "img":"Albums/Kabir/Yeh.jpg",
            "artist":"Shreya Ghoshal",
            "duration":"03:40",
            "id":7
        },
    ]
    const [select, setSelect] = useState(kabir[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(false);
  const [image, setImage] = useState("");

  const song = kabir;

  // colors and states for like button
  const [color1, setColor1] = useState('rgba(163,203,247,1)');
  const [state1, setstate1] = useState();
  const [fav1, setfav1] = useState(true);

  const [color2, setColor2] = useState('rgba(163,203,247,1)');
  const [state2, setstate2] = useState();
  const [fav2, setfav2] = useState(true);

  const [color3, setColor3] = useState('rgba(163,203,247,1)');
  const [state3, setstate3] = useState();
  const [fav3, setfav3] = useState(true);

  const [color4, setColor4] = useState('rgba(163,203,247,1)');
  const [state4, setstate4] = useState();
  const [fav4, setfav4] = useState(true);

  const [color5, setColor5] = useState('rgba(163,203,247,1)');
  const [state5, setstate5] = useState();
  const [fav5, setfav5] = useState(true);

  const [color6, setColor6] = useState('rgba(163,203,247,1)');
  const [state6, setstate6] = useState();
  const [fav6, setfav6] = useState(true);

  const [color7, setColor7] = useState('rgba(163,203,247,1)');
  const [state7, setstate7] = useState();
  const [fav7, setfav7] = useState(true);

  const [click, setClick] = useState(false);


  const dispatch = useDispatch()


  const handleChange1 = () => {
    if (fav1) {
      setColor1('#fec5e5')
      setfav1(false);
      dispatch(addToFav(kabir[0]))
      setstate1(false);
      setClick(true);
    }
    else {
      setColor1('rgba(163,203,247,1)')
      setfav1(true)
      setstate1(true)
      dispatch(removeToFav(kabir[0]))
      setClick(false);
    }
  }

  const handleChange2 = () => {
    if (fav2) {
      setColor2('#fec5e5')
      setfav2(false);
      dispatch(addToFav(kabir[1]))
      setstate2(false);
      setClick(true);
    }
    else {
      setColor2('rgba(163,203,247,1)')
      setfav2(true)
      setstate2(true)
      setClick(false);
      dispatch(removeToFav(kabir[1]))
    }
  }

  const handleChange3 = () => {
    if (fav3) {
      setColor3('#fec5e5')
      setfav3(false);
      dispatch(addToFav(kabir[2]))
      setstate3(false);
      setClick(true);
    }
    else {
      setColor3('rgba(163,203,247,1)')
      setfav3(true)
      setstate3(true)
      setClick(false);
      dispatch(removeToFav(kabir[2]))
    }
  }

  const handleChange4 = () => {
    if (fav4) {
      setColor4('#fec5e5')
      setfav4(false);
      dispatch(addToFav(kabir[3]))
      setstate4(false);
      setClick(true);
    }
    else {
      setColor4('rgba(163,203,247,1)')
      setfav4(true)
      setstate4(true)
      setClick(false);
      dispatch(removeToFav(kabir[3]))
    }
  }
  const handleChange5 = () => {
    if (fav5) {
      setColor5('#fec5e5')
      setfav5(false);
      dispatch(addToFav(kabir[4]))
      setstate4(false);
      setClick(true);
    }
    else {
      setColor5('rgba(163,203,247,1)')
      setfav5(true)
      setstate5(true)
      setClick(false);
      dispatch(removeToFav(kabir[4]))
    }
  }
  const handleChange6 = () => {
    if (fav6) {
      setColor6('#fec5e5')
      setfav6(false);
      dispatch(addToFav(kabir[5]))
      setstate6(false);
      setClick(true);
    }
    else {
      setColor6('rgba(163,203,247,1)')
      setfav6(true)
      setstate6(true)
      setClick(false);
      dispatch(removeToFav(kabir[5]))
    }
  }
  const handleChange7 = () => {
    if (fav7) {
      setColor7('#fec5e5')
      setfav7(false);
      dispatch(addToFav(kabir[6]))
      setstate7(false);
      setClick(true);
    }
    else {
      setColor7('rgba(163,203,247,1)')
      setfav7(true)
      setstate7(true)
      setClick(false);
      dispatch(removeToFav(kabir[6]))
    }
  }
  
  // for 1
  useEffect(() => {
    if (!fav1 || state1) {
      window.localStorage.setItem('fav_color1_kabir', JSON.stringify(color1))
      window.localStorage.setItem('fav_state1_kabir', JSON.stringify(fav1))
    }
  })
  useEffect(() => {
    const get = window.localStorage.getItem('fav_color1_kabir');
    const get1 = window.localStorage.getItem('fav_state1_kabir');
    setColor1(JSON.parse(get));
    setfav1(JSON.parse(get1));
  }, [])
  //for 2
  useEffect(() => {
    if (!fav2 || state2) {
      window.localStorage.setItem('fav_color2_kabir', JSON.stringify(color2))
      window.localStorage.setItem('fav_state2_kabir', JSON.stringify(fav2))
    }
  })
  useEffect(() => {
    const get = window.localStorage.getItem('fav_color2_kabir');
    const get1 = window.localStorage.getItem('fav_state2_kabir');
    setColor2(JSON.parse(get));
    setfav2(JSON.parse(get1));
  }, [])
  //for 3
  useEffect(() => {
    if (!fav3 || state3) {
      window.localStorage.setItem('fav_color3_kabir', JSON.stringify(color3))
      window.localStorage.setItem('fav_state3_kabir', JSON.stringify(fav3))
    }
  })
  useEffect(() => {
    const get = window.localStorage.getItem('fav_color3_kabir');
    const get1 = window.localStorage.getItem('fav_state3_kabir');
    setColor3(JSON.parse(get));
    setfav3(JSON.parse(get1));
  }, [])
  //for 4
  useEffect(() => {
    if (!fav4 || state4) {
      window.localStorage.setItem('fav_color4_kabir', JSON.stringify(color4))
      window.localStorage.setItem('fav_state4_kabir', JSON.stringify(fav4))
    }
  })
  useEffect(() => {
    const get = window.localStorage.getItem('fav_color4_kabir');
    const get1 = window.localStorage.getItem('fav_state4_kabir');
    setColor4(JSON.parse(get));
    setfav4(JSON.parse(get1));
  }, [])
  //for 5
  useEffect(() => {
    if (!fav5 || state5) {
      window.localStorage.setItem('fav_color5_kabir', JSON.stringify(color5))
      window.localStorage.setItem('fav_state5_kabir', JSON.stringify(fav5))
    }
  })
  useEffect(() => {
    const get = window.localStorage.getItem('fav_color5_kabir');
    const get1 = window.localStorage.getItem('fav_state5_kabir');
    setColor5(JSON.parse(get));
    setfav5(JSON.parse(get1));
  }, [])
  //for 6
  useEffect(() => {
    if (!fav6 || state6) {
      window.localStorage.setItem('fav_color6_kabir', JSON.stringify(color6))
      window.localStorage.setItem('fav_state6_kabir', JSON.stringify(fav6))
    }
  })
  useEffect(() => {
    const get = window.localStorage.getItem('fav_color6_kabir');
    const get1 = window.localStorage.getItem('fav_state6_kabir');
    setColor6(JSON.parse(get));
    setfav6(JSON.parse(get1));
  }, [])
  //for 7
  useEffect(() => {
    if (!fav7 || state7) {
      window.localStorage.setItem('fav_color7_kabir', JSON.stringify(color7))
      window.localStorage.setItem('fav_state7_kabir', JSON.stringify(fav7))
    }
  })
  useEffect(() => {
    const get = window.localStorage.getItem('fav_color7_kabir');
    const get1 = window.localStorage.getItem('fav_state7_kabir');
    setColor7(JSON.parse(get));
    setfav7(JSON.parse(get1));
  }, [])

  let count = 1;
  const handleClick = (props) => {
    setSelect(props.music);
    setfake(true);
    setShow(true);
    setImage(props.img);
    if (count === 1) {
      setautoplay(true);
    }
    count = 2;
  };

  return (
    <div className="Head">
      <Nav />
      <div className="main_bh">
        {click ?
          <Alert setClick={setClick} />
          : ""
        }
        <div className="Wallpaper">
          <img src="Albums/Wallpaper/Kabir.jpg" alt="Error" 
            id="wall_kabir"
          />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
            Sonu Ke Titu Ki Sweety is a 2018 Indian Hindi-language comedy film directed by Luv Ranjan. The film was jointly produced by Ranjan along with Bhushan Kumar, Krishan Kumar and Ankur Garg. Karthik Aryan, Nushrat Bharucha and Sunny Singh are playing the main characters in this film. The film was shown in cinemas on 23 February 2018. It was commercially successful.

            The story begins with a crying Titu who is saddened by his girlfriend, Pihu's refusal to even talk to him. His best friend, Sonu tells him that she was not good enough for him at all. Seeing that his words have no effect, he gives her a last warning and asks her to choose between girlfriend or friend. Titu chooses his best friend, Sonu, among them.
          </p>
        </div>
        <div className="title">
          <h1>Songs</h1>
          <p style={{ fontSize: "20px", fontWeight: 'bold' }}><i>List:-</i></p>
        </div>
        <div style={{ border: '1px dashed black', marginBottom: '20px' }}></div>
        <div className="list_head">
          <div id="kabir_number">No.</div>
          <div id="kabir_name">Name</div>
          <div id="kabir_artists">
            Artists
          </div>
          <div id="kabir_duration">
            Duration
          </div>
        </div>
        <div className="list">
          <div className="number">
            {song.map((obj) => (
              <p>{obj.id}.</p>
            ))}
          </div>
          <div className="song_img">
            {song.map((obj) => (
              <img src={obj.img} alt="Error" />
            ))}
          </div>
          <div className="song_name">
            {song.map((obj) => (
              <>
                <div key={obj.id} className="list_name">
                  <h4 onClick={() => handleClick(obj)}>{obj.title}</h4>
                </div>
              </>
            ))}
          </div>

          <div className="list_art">
            {song.map((obj) => (
              <div key={obj.id} className="list_art_name">
                <p>{obj.artist}</p>
              </div>
            ))}
          </div>
          <div className="duration">
            {
              song.map((obj) => (
                <p>{obj.duration}</p>
              ))
            }
          </div>
        </div>
        {show && (
          <div>
            <Player
              select={select}
              fake={fake}
              setfake={setfake}
              song={kabir}
              autoplay={autoplay}
              setautoplay={setautoplay}
              image={image}
              setImage={setImage}
            />
          </div>
        )}
        <div onClick={handleChange1} className="heart1_kabir">
          <Change1 color1={color1||"rgba(163,203,247,1)"} />
        </div>
        <div onClick={handleChange2} className="heart2_kabir">
          <Change2 color2={color2||"rgba(163,203,247,1)"} />
        </div>
        <div onClick={handleChange3} className="heart3_kabir">
          <Change3 color3={color3||"rgba(163,203,247,1)"} />
        </div>
        <div onClick={handleChange4} className="heart4_kabir">
          <Change4 color4={color4||"rgba(163,203,247,1)"} />
        </div>
        <div onClick={handleChange5} className="heart5_kabir">
          <Change5 color5={color5||"rgba(163,203,247,1)"} />
        </div>
        <div onClick={handleChange6} className="heart6_kabir">
          <Change6 color6={color6||"rgba(163,203,247,1)"} />
        </div>
        <div onClick={handleChange7} className="heart7_kabir">
          <Change7 color7={color7||"rgba(163,203,247,1)"} />
        </div>

        {/* For empty space */}
        <div className="space" id="kabir_space">
        </div>
      </div>
    </div>
  );
}
export default Kabir;