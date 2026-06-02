import './Team.css';

export default function Team() {
	const teamMembers = [
    {
      name: "Dr. Emily Carter",
      role: "Family Physician",
      image: "/images/team-member-1.jpg",
    },
    {
      name: "Dr. Michael Lee",
      role: "Nurse Practitioner",
      image: "/images/team-member-2.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Registered Nurse",
      image: "/images/team-member-3.jpg",
    },
    {
      name: "David Kim",
      role: "Mental Health Counsellor",
      image: "/images/team-member-4.jpg",
    },
    {
      name: "Maria Santos",
      role: "Community Health Worker",
      image: "/images/team-member-5.jpg",
    },
    {
      name: "Rachel Green",
      role: "Dietitian",
      image: "/images/team-member-6.jpg",
    },
    {
      name: "James Wilson",
      role: "Physiotherapist",
      image: "/images/team-member-7.jpg",
    },
    {
      name: "Olivia Brown",
      role: "Program Coordinator",
      image: "/images/team-member-8.jpg",
    },
  ];

	return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <p className="team-label">Our Team</p>
          <h2>Meet Our Health Professionals</h2>
          <p>
            Our dedicated team works together to provide compassionate,
            accessible, and community-focused care.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
              </div>

              <div className="team-member-text">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}