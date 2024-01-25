import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="con col-lg-6  pt-3 ">
          <div className="img-container"><img
            src="https://lh3.googleusercontent.com/pw/ABLVV85hWfkxrq_4BSnpUqAxHDejdiK_i2FH7ZkrOp1zc49FmPTUw55sCZ8Gn8HflAjJMcVpC2YjN-ssKs32HDDDO-VZeH2iuxy9Efs_L9UMeiVlWoE_TbIETgw_PT-viDjUs03ImTgR-6TghTYDsdAxZrvOdykOUTmVoPHj_fWTgTmLLU0oIpIX4ZHFg2hc0w670u-egliioY279kDt9NsUErnzzI4HUlptm22nQUptYxhqX8JJkA5i1OoqBJC_ifrJ_ZwaU1L6UZhBCtMBE-IttMyjQs4iuK_ms-ccOkiRaH6jF3fKaWbwysGFSR0atfzlzPY5EXW0b6Y2LG4ByZul326e7cXv5u1HPwZrf0VEB24vtGec2jdx4_UOiIzqQ293MmiASy75rCiuniUk9bp0zT8l35AItoW-QBjRcqLNItTLOWH719YRXib6srY14MPRTd2DDR3jyXkYugLEurug5Iqf-qwvHVgsIeB5rZ_cMqe3CDnLBcrO0am1ItJo9jOqABT0i_0zdk5HqVrfhUwbFwG3qoEB3ZQGrHXl5FwAs3xA0h-ujgxyQfRiC702C-sjt7mIfVTQlunHX_zIW5gTyfgSPH-tAWlUAIzIFE8bUXPdiLiAH0MdqOLVshTxwvJ3yuPUXM1wcbcn-ywc4mnduwFtNlSoMC2pFQ-6g10YPfnbVnRyGd7Yy7zdqXfisilZzEzKzqRrPqRHCb9Ss1oOm5FNJuqie0LEeNcgPpj7KqqLyOHbUI67ZiVNnrst7hN_39BLpZyxdjTmj0n7TIL-pI0ipzxwqWOSUD-CjnI37K_9TZGREtZ98z6O-pyYVucrUxPn72AvFr1KEKsSVPgSrukpjCPDum04zmr5pj4VXahGD886Ah4g7j68tAaNDpWusU-r6x3abHvaTlv7d-ea-66F-5U=w684-h912-s-no-gm?authuser=0"
            alt=""
            className="imgh w-75  h-auto   "
          />
          <Link className="sk" to=''>ContactMe</Link>
          </div>
        </div>
        <div className="left col-lg-6 pt-5 p-5 bg-light">
         <p className="names"> I am <br /> <strong className="name">Kadukuntla Adithya.</strong>{" "}
          <br /> Full Stack Developer.</p>
          <p className="fs-5">Student,steady learner,competitive coder</p>
          <button className="btn p-5  " ><Link className="linkss" to='mailto:adhichiru634@gmail.com?subject=Hello&body=Write your message here'>Let's Talk</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
