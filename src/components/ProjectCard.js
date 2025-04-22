import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <div style={{ marginTop: "10px" }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
              >
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}

// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, link }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} alt={title} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//           {link && (
//             <div style={{ marginTop: "10px" }}>
//               <a
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-outline-light btn-sm"
//               >
//                 View Project
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </Col>
//   );
// }
