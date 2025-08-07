---
layout: default
custom_css:
  - main
  - imghex
  - landing
  - enhanced-styles
  - cherry-storm
custom_js:
  - enhanced-wedding
  - cherry-storm
rain: false
---

{% include navbar.html %}

<div class="main-content-enhanced">
    <div class="center">
        <h1 class="main-title">
            <span class="shreya">Shreya</span>
            <span class="oli"> & </span>
            <span class="kaito">Kaito</span>
        </h1>
    </div>

    <!-- FIXED PHOTO SHOWCASE WITH PROPER REFERENCES -->
    <div class="main-photo-showcase">
        <div class="hero-gallery">
            <div class="main-photo">
                <!-- Main large photo using existing assets -->
                <div class="hex-wrapper featured-photo">
                    <div class="hex">
                        <img src="{{ '/assets/engagement/photo1.jpg' | relative_url }}" alt="Shreya and Kaito - Main Photo" onerror="this.src='{{ '/assets/prewedding/photo1.jpg' | relative_url }}'">
                    </div>
                </div>
            </div>
            
            <div class="secondary-photos">
                <!-- Row of smaller photos -->
                <div class="photo-row">
                    <div class="hex-wrapper secondary-photo">
                        <div class="hex">
                            <img src="{{ '/assets/engagement/photo2.jpg' | relative_url }}" alt="Shreya and Kaito - Photo 2" onerror="this.src='{{ '/assets/family/photo1.jpg' | relative_url }}'">
                        </div>
                    </div>
                    <div class="hex-wrapper secondary-photo">
                        <div class="hex">
                            <img src="{{ '/assets/prewedding/photo1.jpg' | relative_url }}" alt="Shreya and Kaito - Photo 3" onerror="this.src='{{ '/assets/friends/photo1.jpg' | relative_url }}'">
                        </div>
                    </div>
                    <div class="hex-wrapper secondary-photo">
                        <div class="hex">
                            <img src="{{ '/assets/family/photo1.jpg' | relative_url }}" alt="Shreya and Kaito - Photo 4" onerror="this.src='{{ '/assets/travel/photo1.jpg' | relative_url }}'">
                        </div>
                    </div>
                </div>
                
                <div class="photo-row">
                    <div class="hex-wrapper secondary-photo">
                        <div class="hex">
                            <img src="{{ '/assets/friends/photo1.jpg' | relative_url }}" alt="Shreya and Kaito - Photo 5" onerror="this.src='{{ '/assets/engagement/photo3.jpg' | relative_url }}'">
                        </div>
                    </div>
                    <div class="hex-wrapper secondary-photo">
                        <div class="hex">
                            <img src="{{ '/assets/travel/photo1.jpg' | relative_url }}" alt="Shreya and Kaito - Photo 6" onerror="this.src='{{ '/assets/prewedding/photo2.jpg' | relative_url }}'">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Wedding Announcement -->
    <div class="wedding-announcement">
        <h2>We're Getting Married!</h2>
        <p><strong>February 3rd, 2026</strong></p>
        <p><strong>Bangalore, India</strong></p>
        <p>Join us as we celebrate our love story and the beginning of our journey together.</p>
    </div>

    <!-- Couple Description -->
    <div class="couple-description">
        <p>Two hearts, two cultures, one beautiful love story. We met during our graduate studies and knew we had found something special. Now, we're excited to share our joy with family and friends from around the world.</p>
    </div>
</div>
