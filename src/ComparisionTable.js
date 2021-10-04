import React from "react";
import "./styles.css";

const ComparisionTable = ({ data }) => {
  return (
    <div className="grid-container">
      <div></div>
      <div></div>
      {Object.keys(data).map((item) => {
        return data[item].featuresList.map((child) => {
          return (
            <div>
              <div>{child.title}</div>
              {child.features.map((features) => {
                return (
                  <div>
                    <div>{features.featureName}</div>
                    <div>
                      <div className="grid-item">
                        {Object.values(features.values)[0]}
                      </div>
                      <div className="grid-item">
                        {Object.values(features.values)[1]}
                      </div>
                      <div className="grid-item">
                        {Object.values(features.values)[2]}
                      </div>
                      <div className="grid-item">
                        {Object.values(features.values)[3]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        });
      })}
    </div>
  );
};

export default ComparisionTable;
