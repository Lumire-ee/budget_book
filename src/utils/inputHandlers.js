export const handleInputChange = (formData, setFormData, e) => {
  const { name, value } = e.target;

  if (name === "amount") {
    const rawValue = value.replace(/,/g, "").replace(/[^0-9]/g, ""); // 숫자만 허용
    const parsedValue = rawValue ? parseInt(rawValue, 10) : 0;

    setFormData({
      ...formData,
      [name]: parsedValue > 0 ? parsedValue.toLocaleString() : "",
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};
