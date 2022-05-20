import React from 'react';


const styles = {
  pageHeightStyle: {
    backgroundColor: "#f0f8ff"
  }
}

export default function Container({renderPage}) {


  return (
    <div className="d-flex justify-content-center" style={styles.pageHeightStyle}>
      {renderPage()}
    </div>
  );
}