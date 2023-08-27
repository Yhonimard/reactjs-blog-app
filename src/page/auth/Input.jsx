const AuthInput = ({ name, type, register, placeholder, error }) => {
  return (
    // <div className="mb-3">
    <>
      <label className="label">
        <label className="label-text text-base block">{placeholder}</label>
      </label>
      <input
        type={type || "text"}
        className={`input w-full input-bordered ${error && `input-error`}`}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <label className="label"><label className="label-text-alt">{error?.message}</label></label>}
    </>
    // </div>
  );
};

export default AuthInput;
