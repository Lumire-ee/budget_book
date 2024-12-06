export const handleInputChange = (formData, setFormData, e) => {
  const { name, value } = e.target;

  if (name === "amount") {
    const rawValue = value.replace(/,/g, "").replace(/[^0-9]/g, "");
    if (/^\d*$/.test(rawValue)) {
      setFormData({
        ...formData,
        [name]:
          rawValue === ""
            ? ""
            : Math.abs(parseInt(rawValue, 10)).toLocaleString(),
      });
    }
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};
