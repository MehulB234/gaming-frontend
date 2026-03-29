const LocationMap = () => {
    return (
        <aside className="contact-aside">
            <h3>Location</h3>
            <div className="map-wrap">
                <iframe
                    title="GamerGauntlet location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.0021038412383!2d-81.03373772523273!3d33.992479720885186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad7ff85decd%3A0xeba1e7740d5c10e0!2sM.%20Bert%20Storey%20Engineering%20and%20Innovation%20Center!5e0!3m2!1sen!2sus!4v1772547121327!5m2!1sen!2sus"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </aside>
    );
};

export default LocationMap;