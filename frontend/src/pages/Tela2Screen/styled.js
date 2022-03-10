import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  
`;
export const PageTitle = styled.h1`
  font-size: 27px;
  display: flex;
  justify-content: space-between;
  button{
    text-decoration: none;
    color: #000;
    border: 0;
    background: none;
    cursor: pointer;
  }
`;
export const PageArea = styled.div`
 
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow : 0px 0px 3px #999;

    .area{
      display: flex;
      align-items : center;
      padding: 10px;
      max-width: 500px;
    }
    .area-title {
      width: 200px;
      text-align: right;
      padding-right: 20px;
      font-weight: bold;
      font-size: 14px;
    }
    .area-input{
      flex: 1;

      input {
        width: 100%;
        font-size: 14px;
        padding: 5px;
        border: 1px solid #DDD;
        outline: 0;
        transition: all ease .4s;

        &:focus {
          border: 1px solid #333;
          color: #333
        }

      }

      button {
        background-color: #4682B4;
        border: 0;
        outline: 0;
        padding: 5px 10px;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;

        &:hover {
          background-color: #4682a1;
        }
      }
    }
  }
`;

export const ModuleArea = styled.div`
  color: #000;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const ModuleLists = styled.div` 
  
  flex: 1;
  margin-left: 14px;
  margin-top: 10px;
  padding-left: 4px;
`;