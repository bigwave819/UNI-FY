const sampleTestimonials = [
    {
      title: "Exceptional Service",
      feedback: "The team was incredibly helpful, ensuring our needs were met. Highly recommended!",
      author: "Paula Morris, NYC, California",
      rating: 5,
    },
    {
      title: "Efficient and Reliable",
      feedback: "The process was smooth and efficient. The results exceeded expectations.",
      author: "Frankie Thomas",
      rating: 5,
    },
    {
      title: "Trusted Advisors",
      feedback: "Their expertise gave us peace of mind during challenging times.",
      author: "John Marks",
      rating: 5,
    },
  ];
  
  const handleJoinNow = () => {
    alert("Joining now...");
  };
  
  <Testimonials testimonials={sampleTestimonials} onJoinNow={handleJoinNow} />;
  