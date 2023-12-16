const Select1 = (handleCancelBtn) => {
  return (
    <div>
        
      <div className="Botones">
              <button type="submit" value={"Submit"} className="btn__save">
                  Save user
              </button>
              <button onClick={handleCancelBtn}  className="btn__Cancel">
                  Or Cancel
              </button>
          
              </div>
    </div>
  )
}
export default Select1