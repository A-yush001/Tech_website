import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form action="">
                <div>
                    <label >Name</label>
                    <input type="text" name="name" required placeholder="abc" />
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" name="name" required placeholder="abc@gmail.com" />
                </div>
                <div>
                    <label >Message</label>
                    <input type="text" name="name" required placeholder="Tell us about your querry..." />
                </div>
                <button type="submit">Send</button>
            </form>
        </main>
      
    </div>
  )
}

export default Contact
