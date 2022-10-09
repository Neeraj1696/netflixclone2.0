import React from "react";

function Navbar() {
  // const [show, setShow] = useState(false);
  // const handleShow = () => {
  //   if (window.scroll > 100) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleShow);
  //   return () => window.removeEventListener("scroll", handleShow);
  // }, []);

  return (
    <div>
      <div className="flex justify-between items-center  w-full h-20 top-0 sticky bg-slate-800">
        <img
          className="w-24 h-12 ml-2 cursor-pointer "
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="error"
        />
        <img
          className="w-16 h-14 mr-2 cursor-pointer "
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
          alt="error"
        />
      </div>
    </div>
  );
}

export default Navbar;
