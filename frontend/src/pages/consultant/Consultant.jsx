import React, { useState } from 'react';
import { Hospital, Stethoscope, MapPin, Star, Calendar, Video, User, ChevronDown, ChevronUp, Navigation, Camera, Map } from 'lucide-react';
import './Consultant.css';
import Navbar from '../../components/dashboard/Navbar/Navbar';  

 const Consultant = () => {
  const [selectedTab, setSelectedTab] = useState('hospitals');
  const [expandedHospital, setExpandedHospital] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showHospitalImages, setShowHospitalImages] = useState(null);

  const hospitals = [
    {
      id: 1,
      name: "Mount Adora Hospital",
      rating: 4.8,
      distance: "1.2 km",
      capacity: "500 beds",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      contact: "09610-848484",
      mapLink: "https://www.google.com/maps/dir//Mount+Adora+Hospital,+Akhaliya,+Sylhet.,+1+Sylhet+-+Sunamganj+Hwy,+Sylhet+3100/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x37505544775d6bf9:0xcec939c657524489?sa=X&ved=1t:57443&ictx=111",
      images: ["Hospital exterior view", "Emergency ward", "Private rooms", "ICU facility"]
    },
    {
      id: 2,
      name: "Al Haramain Hospital Pvt. Ltd",
      rating: 4.6,
      distance: "2.5 km",
      capacity: "350 beds",
      specialties: ["Pediatrics", "Gynecology", "General Medicine"],
      contact: "+1 234-567-8901",
      mapLink: "https://maps.google.com/?q=St+Marys+Medical+Center",
      images: ["Main entrance", "Consultation rooms", "Pediatric ward", "Laboratory"]
    },
    {
      id: 3,
      name: "Sylhet MAG Osmani Medical College and Hospital",
      rating: 4.9,
      distance: "3.8 km",
      capacity: "200 beds",
      specialties: ["Dermatology", "ENT", "Ophthalmology"],
      contact: "+1 234-567-8902",
      mapLink: "https://maps.google.com/?q=Green+Valley+Clinic",
      images: ["Reception area", "Waiting lounge", "Treatment rooms", "Pharmacy"]
    }
  ];

  const doctorCategories = [
    {
      id: 1,
      category: "Cardiology",
      doctors: [
        {
          id: 101,
          name: "Dr. Robert Smith",
          education: "MD, DM Cardiology - Harvard Medical School",
          specialty: "Interventional Cardiology",
          experience: "15 years",
          rating: 4.9,
          hospital: "City General Hospital",
          consultationFee: "$150",
          availability: "Mon, Wed, Fri"
        },
        {
          id: 102,
          name: "Dr. Emily Johnson",
          education: "MD, DM Cardiology - Johns Hopkins",
          specialty: "Pediatric Cardiology",
          experience: "12 years",
          rating: 4.7,
          hospital: "City General Hospital",
          consultationFee: "$140",
          availability: "Tue, Thu, Sat"
        }
      ]
    },
    {
      id: 2,
      category: "Neurology",
      doctors: [
        {
          id: 201,
          name: "Dr. Michael Chang",
          education: "MD, DM Neurology - Stanford University",
          specialty: "Movement Disorders",
          experience: "18 years",
          rating: 4.8,
          hospital: "City General Hospital",
          consultationFee: "$160",
          availability: "Mon, Tue, Thu"
        }
      ]
    },
    {
      id: 3,
      category: "Pediatrics",
      doctors: [
        {
          id: 301,
          name: "Dr. Sarah Williams",
          education: "MD, DCH - Yale School of Medicine",
          specialty: "Neonatology",
          experience: "10 years",
          rating: 4.9,
          hospital: "St. Mary's Medical Center",
          consultationFee: "$120",
          availability: "Mon-Sat"
        },
        {
          id: 302,
          name: "Dr. James Anderson",
          education: "MD, MRCPCH - UCLA",
          specialty: "Pediatric Infectious Diseases",
          experience: "14 years",
          rating: 4.6,
          hospital: "St. Mary's Medical Center",
          consultationFee: "$130",
          availability: "Tue, Wed, Fri"
        }
      ]
    },
    {
      id: 4,
      category: "Dermatology",
      doctors: [
        {
          id: 401,
          name: "Dr. Lisa Martinez",
          education: "MD, DVD - Columbia University",
          specialty: "Cosmetic Dermatology",
          experience: "8 years",
          rating: 4.7,
          hospital: "Green Valley Clinic",
          consultationFee: "$110",
          availability: "Mon, Wed, Fri"
        }
      ]
    },
    {
      id: 5,
      category: "Orthopedics",
      doctors: [
        {
          id: 501,
          name: "Dr. David Thompson",
          education: "MD, MS Orthopedics - Mayo Clinic",
          specialty: "Sports Medicine",
          experience: "16 years",
          rating: 4.8,
          hospital: "City General Hospital",
          consultationFee: "$145",
          availability: "Mon-Fri"
        }
      ]
    }
  ];

  const handleBookConsultation = (doctor, type) => {
    alert(`Booking ${type} consultation with ${doctor.name}\nFee: ${doctor.consultationFee}\n\nNote: Follow-up online sessions are always available after your first consultation!`);
  };

  const toggleHospital = (hospitalId) => {
    setExpandedHospital(expandedHospital === hospitalId ? null : hospitalId);
    setExpandedCategory(null);
    setSelectedDoctor(null);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setSelectedDoctor(null);
  };

  const selectDoctor = (doctor) => {
    setSelectedDoctor(selectedDoctor?.id === doctor.id ? null : doctor);
  };

  return (
    <>
    <Navbar />
      <div className="container">
        <div className="header">
          <h1>Consultation</h1>
          <p>Book online or offline sessions with expert doctors</p>
          <div className="info-box">
            <p>💡 You can always book follow-up online sessions after your first consultation!</p>
          </div>
        </div>

        <div className="tab-container">
          <button
            onClick={() => setSelectedTab('hospitals')}
            className={`tab-button ${selectedTab === 'hospitals' ? 'active' : 'inactive'}`}
          >
            <Hospital size={20} />
            Hospitals Near You
          </button>
          <button
            onClick={() => setSelectedTab('doctors')}
            className={`tab-button ${selectedTab === 'doctors' ? 'active' : 'inactive'}`}
          >
            <Stethoscope size={20} />
            Find Doctors
          </button>
        </div>

        {selectedTab === 'hospitals' && (
          <div className="content-box">
            <h2>
              <Navigation size={28} />
              Hospitals Near You
            </h2>

            <div>
              {hospitals.map((hospital) => (
                <div key={hospital.id} className="hospital-item">
                  <div
                    onClick={() => toggleHospital(hospital.id)}
                    className="hospital-header"
                  >
                    <div className="hospital-header-content">
                      <div className="hospital-title">
                        <h3>{hospital.name}</h3>
                        <div className="hospital-meta">
                          <span className="meta-item rating">
                            <Star size={16} fill="currentColor" />
                            {hospital.rating}
                          </span>
                          <span className="meta-item distance">
                            <MapPin size={16} />
                            {hospital.distance}
                          </span>
                          <span className="meta-item">{hospital.capacity}</span>
                        </div>
                      </div>
                      <ChevronDown
                        className="chevron-icon"
                        size={24}
                        style={{
                          transform: expandedHospital === hospital.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                  </div>

                  {expandedHospital === hospital.id && (
                    <div className="hospital-details">
                      <div className="details-section">
                        <h4>Contact Information</h4>
                        <p>{hospital.contact}</p>
                      </div>

                      <div className="details-section">
                        <h4>Available Specialties</h4>
                        <div className="specialties">
                          {hospital.specialties.map((specialty, idx) => (
                            <span key={idx} className="specialty-badge">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="button-group">
                        <button
                          onClick={() => window.open(hospital.mapLink, '_blank')}
                          className="button button-primary"
                        >
                          <Map size={18} />
                          View on Map
                        </button>
                        <button
                          onClick={() => setShowHospitalImages(showHospitalImages === hospital.id ? null : hospital.id)}
                          className="button button-secondary"
                        >
                          <Camera size={18} />
                          {showHospitalImages === hospital.id ? 'Hide' : 'View'} Pictures
                        </button>
                      </div>

                      {showHospitalImages === hospital.id && (
                        <div className="hospital-images">
                          <h5>Hospital Pictures</h5>
                          <div className="images-grid">
                            {hospital.images.map((image, idx) => (
                              <div key={idx} className="image-card">
                                <Camera size={32} style={{ color: 'var(--color-primary)', margin: '0 auto' }} />
                                <p>{image}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="categories-section">
                        <h4>Available Doctors by Category</h4>
                        <div>
                          {doctorCategories
                            .filter((cat) =>
                              cat.doctors.some((doc) => doc.hospital === hospital.name)
                            )
                            .map((category) => (
                              <div key={category.id} className="category-item">
                                <div
                                  onClick={() => toggleCategory(category.id)}
                                  className="category-header"
                                >
                                  <span>{category.category}</span>
                                  <ChevronDown
                                    className="chevron-icon"
                                    size={20}
                                    style={{
                                      transform: expandedCategory === category.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                      transition: 'transform 0.3s ease'
                                    }}
                                  />
                                </div>

                                {expandedCategory === category.id && (
                                  <div className="category-content">
                                    {category.doctors
                                      .filter((doc) => doc.hospital === hospital.name)
                                      .map((doctor) => (
                                        <div key={doctor.id}>
                                          <div
                                            onClick={() => selectDoctor(doctor)}
                                            className="doctor-header"
                                            style={{ cursor: 'pointer' }}
                                          >
                                            <div className="doctor-header-content">
                                              <div className="doctor-info">
                                                <div className="doctor-name">{doctor.name}</div>
                                                <div className="doctor-specialty">{doctor.specialty}</div>
                                                <div className="doctor-rating">
                                                  <Star size={14} fill="currentColor" style={{ color: '#fbbf24' }} />
                                                  <span>{doctor.rating}</span>
                                                </div>
                                              </div>
                                              <div className="doctor-fee">{doctor.consultationFee}</div>
                                            </div>
                                          </div>

                                          {selectedDoctor?.id === doctor.id && (
                                            <div className="doctor-details">
                                              <h6>Doctor Details</h6>
                                              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.875rem' }}>
                                                <p><span style={{ fontWeight: 600, color: 'var(--color-text)' }}>Education:</span> {doctor.education}</p>
                                                <p><span style={{ fontWeight: 600, color: 'var(--color-text)' }}>Specialty:</span> {doctor.specialty}</p>
                                                <p><span style={{ fontWeight: 600, color: 'var(--color-text)' }}>Experience:</span> {doctor.experience}</p>
                                                <p><span style={{ fontWeight: 600, color: 'var(--color-text)' }}>Hospital:</span> {doctor.hospital}</p>
                                                <p><span style={{ fontWeight: 600, color: 'var(--color-text)' }}>Availability:</span> {doctor.availability}</p>
                                              </div>
                                              <div className="booking-buttons">
                                                <button
                                                  onClick={() => handleBookConsultation(doctor, 'offline')}
                                                  className="booking-button primary"
                                                >
                                                  <User size={16} />
                                                  Book Offline
                                                </button>
                                                <button
                                                  onClick={() => handleBookConsultation(doctor, 'online')}
                                                  className="booking-button secondary"
                                                >
                                                  <Video size={16} />
                                                  Book Online
                                                </button>
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'doctors' && (
          <div className="content-box">
            <h2>
              <Stethoscope size={28} />
              Find Doctors by Category
            </h2>

            <div>
              {doctorCategories.map((category) => (
                <div key={category.id} className="hospital-item">
                  <div
                    onClick={() => toggleCategory(category.id)}
                    className="hospital-header"
                  >
                    <div className="hospital-header-content">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                        <div style={{ backgroundColor: 'var(--color-primary)', padding: '0.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Stethoscope size={20} style={{ color: 'white' }} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)' }}>{category.category}</h3>
                        <span style={{ backgroundColor: '#d1f3f0', color: 'var(--color-primary-dark)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600 }}>
                          {category.doctors.length} {category.doctors.length === 1 ? 'Doctor' : 'Doctors'}
                        </span>
                      </div>
                      <ChevronDown
                        className="chevron-icon"
                        size={24}
                        style={{
                          transform: expandedCategory === category.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                  </div>

                  {expandedCategory === category.id && (
                    <div className="hospital-details">
                      <div className="doctors-list">
                        {category.doctors.map((doctor) => (
                          <div key={doctor.id} className="doctor-card">
                            <div
                              onClick={() => selectDoctor(doctor)}
                              className="doctor-card-header"
                            >
                              <div className="doctor-card-content">
                                <div className="doctor-card-info">
                                  <h4 className="doctor-card-name">{doctor.name}</h4>
                                  <p className="doctor-card-specialty">{doctor.specialty}</p>
                                  <div className="doctor-card-meta">
                                    <span style={{ display: 'flex', alignItems: 'center', color: 'var(--color-primary)', fontWeight: 600 }}>
                                      <Star size={14} fill="currentColor" style={{ marginRight: '0.25rem' }} />
                                      {doctor.rating}
                                    </span>
                                    <span style={{ color: 'var(--color-text-light)' }}>{doctor.experience} experience</span>
                                    <span style={{ color: 'var(--color-text-light)' }}>
                                      <MapPin size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                                      {doctor.hospital}
                                    </span>
                                  </div>
                                </div>
                                <div className="doctor-card-fee">
                                  <p className="doctor-card-fee-amount">{doctor.consultationFee}</p>
                                  <p className="doctor-card-fee-label">consultation fee</p>
                                </div>
                              </div>
                            </div>

                            {selectedDoctor?.id === doctor.id && (
                              <div className="doctor-profile">
                                <h5>Complete Profile</h5>
                                <div className="profile-grid">
                                  <div className="profile-item">
                                    <p>Education</p>
                                    <p>{doctor.education}</p>
                                  </div>
                                  <div className="profile-item">
                                    <p>Specialty</p>
                                    <p>{doctor.specialty}</p>
                                  </div>
                                  <div className="profile-item">
                                    <p>Experience</p>
                                    <p>{doctor.experience}</p>
                                  </div>
                                  <div className="profile-item">
                                    <p>Current Practice</p>
                                    <p>{doctor.hospital}</p>
                                  </div>
                                  <div className="profile-item">
                                    <p>Availability</p>
                                    <p>{doctor.availability}</p>
                                  </div>
                                  <div className="profile-item">
                                    <p>Rating</p>
                                    <p style={{ display: 'flex', alignItems: 'center' }}>
                                      <Star size={16} fill="#fbbf24" style={{ color: '#fbbf24', marginRight: '0.25rem' }} />
                                      {doctor.rating} / 5.0
                                    </p>
                                  </div>
                                </div>

                                <div className="note-box">
                                  <p>
                                    <span>💡 Note:</span> After your first consultation (online or offline), 
                                    you can always schedule follow-up sessions online for added convenience!
                                  </p>
                                </div>

                                <div className="booking-buttons">
                                  <button
                                    onClick={() => handleBookConsultation(doctor, 'offline')}
                                    className="booking-button primary"
                                  >
                                    <User size={18} />
                                    Book Offline Session
                                  </button>
                                  <button
                                    onClick={() => handleBookConsultation(doctor, 'online')}
                                    className="booking-button secondary"
                                  >
                                    <Video size={18} />
                                    Book Online Session
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Consultant;

