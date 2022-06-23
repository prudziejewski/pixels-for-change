import Board from "../components/Board/Board";
import React from "react";
import axios from "axios";


class Home extends React.Component {
 
     
    
    render() {
          
        return (
        <>
            <Board />
        </>
      
      );
    }
    }
      
     

  
  export default Home;


  //         let currentId;
//         if (this.props.match.params.id) {
//             currentId = this.props.match.params.id;
//         } else {
//         currentId = response.data[0].id;
//       }
//       return this.fetchActiveVideo(currentId);
      
//       })
//      .then((response) => {
//          this.setState({
//              activeVideo: response.data,
//          });
//      })
//      .catch((error) => {
//          this.setState({
//              hasFetchingError: true,
//          });
//      });
//     }
//   // Checks for ids to be the same if not will update the video details though API if no details found will set to default   
//      componentDidUpdate(previousProps) {
//          const previousId = previousProps.match.params.id;
//          const currentId = this.props.match.params.id;
  
//   if (typeof currentId === "undefined") {
//       const activeVideoId = this.state.results[0].id;
  
//       this.fetchActiveVideo(activeVideoId)
//       .then(response => {
//           this.setState({
//               activeVideo: response.data
//           })
//       });
//   } else if (currentId !== previousId) {
//       this.fetchActiveVideo(currentId)
//       .then(response => {
//           this.setState({
//               activeVideo: response.data
//           })
//       });
//       window.scrollTo(0,0);
//   }
//      }
//   // function to call API based on video ID
//   fetchActiveVideo = (currentId) => {
//       return axios
//       // .get(`https://project-2-api.herokuapp.com/videos/${currentId}?api_key=24afde11-7760-4f12-be67-c4ae118c476d`);
//       .get(`http://localhost:7001/videos/${currentId}`);
//   };
//     render() {
//       const { results, activeVideo, hasFetchingError } = this.state
//   // Check for errors 
//       if (hasFetchingError) {
//           return <p>Error loading data from server</p>;
//       }
//       if (!activeVideo) {
//           return <p>Loading ...</p>;
//       }
//   // Will filter Next video section to not display current item 
//       const filteredResults = results.filter(video => {
//           return video.id !== activeVideo.id;
         
//       });