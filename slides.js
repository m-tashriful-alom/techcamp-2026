/* ============================================================
   SLIDE CONTENT
   12 slides total. Part-number "divider" slides have been
   merged into the content slide that follows them, per request.
   Image-sources slide removed. Image placeholders added to:
   history, perception, localization, planning, control, yape,
   maserati.
   ============================================================ */
var SLIDES_HTML = `

<!-- 01 — TITLE -->
<section class="slide title-slide">
  <div class="badge">POLITECNICO DI MILANO · TECHCAMP 2026</div>
  <h1 class="headline">Intelligent &amp;<br><span class="accent">Autonomous Driving</span></h1>
  <p class="lede">A comprehensive look into the core software blocks, algorithms, and real-world implementations studied during our 4-day intensive camp.</p>
  <div class="title-footer">
    <div>
      <div class="group-tag">Group 4</div>
      <div class="group-sub">A.K.A. THE BEST GROUP 😎</div>
    </div>
    <div class="members">
      <b>M Tashriful Alom</b><br>
      Member 2<br>
      Member 3
    </div>
  </div>
</section>

<!-- 02 — AV HISTORY (Part 01 merged in) -->
<section class="slide">
  <div class="content-grid">
    <div class="col-text">
      <div class="eyebrow">PART 01 <span class="sep">/</span> ROOTS &amp; EVOLUTION</div>
      <h2>How We Got Here: AV History</h2>
      <div class="card-stack">
        <div class="info-card">
          <div class="card-head"><span class="icon">⏳</span> 1970s Pioneers</div>
          <p>Initial experimentation with computer vision and early automated tracking systems set the very first basic algorithms for vehicle path detection in structured environments.</p>
        </div>
        <div class="info-card">
          <div class="card-head"><span class="icon">🏆</span> The DARPA Challenges</div>
          <p>The legendary desert &amp; urban autonomous races in the mid-2000s catalyzed major breakthroughs, defining the standard modern modular software stack we use today.</p>
        </div>
        <div class="info-card">
          <div class="card-head"><span class="icon">🎛️</span> The SAE Levels of Automation</div>
          <p>A standardized scale ranking from Level 0 (fully manual) up to Level 5 (fully autonomous in any environment), setting expectations for real-world deployment.</p>
        </div>
      </div>
    </div>
    <div class="img-frame" data-img="history.jpg" data-label="AV History">
      <div class="frame-corners"><span class="c-tl"></span><span class="c-tr"></span><span class="c-bl"></span><span class="c-br"></span></div>
      <div class="corner-tag">FIG. 01 — TIMELINE</div>
    </div>
  </div>
</section>

<!-- 03 — PERCEPTION (Part 02 merged in) -->
<section class="slide">
  <div class="content-grid">
    <div class="col-text">
      <div class="eyebrow">PART 02 <span class="sep">/</span> HOW THE VEHICLE SEES</div>
      <h2>Environmental Perception</h2>
      <p class="intro">To build a reliable model of the surrounding world, the self-driving stack relies on diverse sensors working together to cover all blind spots:</p>
      <ul class="feature-list">
        <li><span class="bullet"></span><span><b>Cameras:</b> Capture texture, color, traffic signs, and road lanes.</span></li>
        <li><span class="bullet"></span><span><b>LiDAR:</b> Creates millions of 3D point clouds to measure distance accurately.</span></li>
        <li><span class="bullet"></span><span><b>Radar:</b> Bounces radio waves to detect dynamic obstacle speeds through bad weather.</span></li>
        <li><span class="bullet"></span><span><b>Object Classification:</b> Deep Learning (CNNs) classifies and tracks dynamics in real-time.</span></li>
      </ul>
    </div>
    <div class="img-frame" data-img="perception.jpg" data-label="Sensors & Intelligence">
      <div class="frame-corners"><span class="c-tl"></span><span class="c-tr"></span><span class="c-bl"></span><span class="c-br"></span></div>
      <div class="corner-tag">FIG. 02 — LIDAR POINT CLOUD</div>
    </div>
  </div>
</section>

<!-- 04 — LOCALIZATION (Part 03 merged in) -->
<section class="slide">
  <div style="max-width:1280px;margin:0 auto;width:100%;">
    <div class="eyebrow">PART 03 <span class="sep">/</span> LOCALIZATION &amp; HD MAPS</div>
    <h2 style="font-family:var(--disp);font-size:clamp(26px,3.2vw,38px);font-weight:700;margin:0 0 28px 0;">Precise Centimeter Localization</h2>
    <div class="content-grid" style="grid-template-columns:0.95fr 1.05fr;">
      <div class="img-frame" data-img="localization.jpg" data-label="Sensor Fusion" style="aspect-ratio:1/1;">
        <div class="frame-corners"><span class="c-tl"></span><span class="c-tr"></span><span class="c-bl"></span><span class="c-br"></span></div>
        <div class="corner-tag">FIG. 03 — HD MAP LAYER</div>
      </div>
      <div class="card-grid-2" style="max-width:none;">
        <div class="info-card">
          <div class="card-head"><span class="icon">📍</span> HD Maps</div>
          <p style="margin-bottom:10px;">Standard GPS maps only have meter-level accuracy. High-Definition maps act as a crucial sensor layer containing:</p>
          <ul class="feature-list" style="gap:8px;">
            <li><span class="bullet"></span><span>Microscopic lane boundary structures</span></li>
            <li><span class="bullet"></span><span>Precise positions of crosswalks and traffic signs</span></li>
            <li><span class="bullet"></span><span>3D reference landmarks used for sensor alignment</span></li>
          </ul>
        </div>
        <div class="info-card">
          <div class="card-head"><span class="icon">🔗</span> Sensor Fusion</div>
          <p style="margin-bottom:10px;">We cannot rely on a single system. To achieve real centimeter positioning, we fuse data constantly:</p>
          <ul class="feature-list" style="gap:8px;">
            <li><span class="bullet"></span><span><b>GPS/GNSS:</b> Gives absolute global coordinates</span></li>
            <li><span class="bullet"></span><span><b>IMU:</b> Measures exact pitch, roll, yaw</span></li>
            <li><span class="bullet"></span><span><b>Wheel Encoders:</b> Measures continuous tire rotation</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 05 — GRAPH PLANNING & ROUTING (Part 04 merged in) -->
<section class="slide">
  <div class="content-grid">
    <div class="col-text">
      <div class="eyebrow">PART 04 <span class="sep">/</span> GRAPH PLANNING &amp; ROUTING</div>
      <h2>Finding the Optimal Path</h2>
      <p class="intro">For a computer to plan a route, the map must be simplified into a mathematical graph structure:</p>
      <ul class="feature-list">
        <li><span class="bullet"></span><span><b>Vertices (Nodes):</b> Represent intersections, junctions, or transition choices.</span></li>
        <li><span class="bullet"></span><span><b>Edges (Arcs):</b> Represent the physical streets linking those intersections.</span></li>
      </ul>
      <p class="intro" style="margin-top:16px;">By calculating the optimal sequence of edges, global routers find the quickest route while minimizing overall cost.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div class="img-frame" data-img="planning.jpg" data-label="Graph Routing" style="aspect-ratio:16/10;">
        <div class="frame-corners"><span class="c-tl"></span><span class="c-tr"></span><span class="c-bl"></span><span class="c-br"></span></div>
        <div class="corner-tag">FIG. 04 — ROUTE GRAPH</div>
      </div>
      <div class="formula-panel">
        <div class="fp-title">Multi-Weight Cost Minimization</div>
        <div class="fp-eq">C = Σ<sub>e∈Path</sub> w<sub>time</sub>·T<sub>e</sub> + w<sub>cost</sub>·M<sub>e</sub></div>
        <div class="fp-note">Where T<sub>e</sub> is time, M<sub>e</sub> is financial cost (tolls), and w represents prioritizations.</div>
      </div>
    </div>
  </div>
</section>

<!-- 06 — CONTROL: VEHICLE DYNAMICS (Part 05 merged in) -->
<section class="slide">
  <div style="max-width:1280px;margin:0 auto;width:100%;">
    <div class="eyebrow">PART 05 <span class="sep">/</span> CONTROL: VEHICLE DYNAMICS</div>
    <h2 style="font-family:var(--disp);font-size:clamp(26px,3.2vw,38px);font-weight:700;margin:0 0 28px 0;">Vehicle Dynamics &amp; Control</h2>
    <div class="content-grid" style="grid-template-columns:0.9fr 1.1fr;">
      <div class="img-frame" data-img="control.jpg" data-label="Vehicle Dynamics" style="aspect-ratio:1/1;">
        <div class="frame-corners"><span class="c-tl"></span><span class="c-tr"></span><span class="c-bl"></span><span class="c-br"></span></div>
        <div class="corner-tag">FIG. 05 — PID LOOP</div>
      </div>
      <div class="card-grid-2" style="max-width:none;">
        <div class="info-card">
          <div class="card-head"><span class="icon">⚙️</span> Vehicle Dynamics</div>
          <p style="margin-bottom:10px;">Autonomous systems cannot treat the vehicle as a mere point in space. The controller must carefully calculate real physics limit factors:</p>
          <ul class="feature-list" style="gap:8px;">
            <li><span class="bullet"></span><span>Tyre grip saturation thresholds</span></li>
            <li><span class="bullet"></span><span>Lateral drift and vehicle roll dynamics</span></li>
            <li><span class="bullet"></span><span>Friction modifications due to wet asphalt</span></li>
          </ul>
        </div>
        <div class="info-card">
          <div class="card-head"><span class="icon">🔄</span> PID Controllers</div>
          <p style="margin-bottom:10px;">The primary feedback control mechanism that tracks error differences between proposed path and real-world execution:</p>
          <ul class="feature-list" style="gap:8px;">
            <li><span class="bullet"></span><span><b>Proportional:</b> Corrects output based directly on error</span></li>
            <li><span class="bullet"></span><span><b>Integral:</b> Cancels steady-state errors over time</span></li>
            <li><span class="bullet"></span><span><b>Derivative:</b> Predicts future drift to prevent overshoot</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 07 — MATLAB & YAPE ROBOT (Part 06 merged in) -->
<section class="slide">
  <div class="content-grid">
    <div class="col-text">
      <div class="eyebrow">PART 06 <span class="sep">/</span> OUR TECHCAMP JOURNEY</div>
      <h2>MATLAB &amp; Polimi's YAPE Robot</h2>
      <p class="intro">Theoretical equations quickly became concrete on the final days of the camp, allowing us to interact with actual hardware platforms built directly at Politecnico di Milano.</p>
      <ul class="feature-list">
        <li><span class="bullet"></span><span><b>Our Task:</b> Programmed simulated environments within MATLAB scripts.</span></li>
        <li><span class="bullet"></span><span><b>YAPE Integration:</b> Translated mathematical commands onto the physical micro-mobility autonomous delivery robot.</span></li>
        <li><span class="bullet"></span><span><b>Real Constraints:</b> Learned to navigate physical obstacles and safe deceleration in real-time.</span></li>
      </ul>
    </div>
    <div class="img-frame" data-img="yape.jpg" data-label="YAPE Delivery Robot">
      <div class="frame-corners"><span class="c-tl"></span><span class="c-tr"></span><span class="c-bl"></span><span class="c-br"></span></div>
      <div class="corner-tag">FIG. 06 — YAPE ON-SITE</div>
    </div>
  </div>
</section>

<!-- 08 — MASERATI AUTONOMOUS (full-bleed hero split) -->
<section class="slide" style="padding:0;">
  <div class="hero-split">
    <div class="text-side">
      <div class="eyebrow">AIDA / POLIMOVE <span class="sep">/</span> RESEARCH SPOTLIGHT</div>
      <h2 style="font-family:var(--disp);font-size:clamp(26px,3.2vw,38px);font-weight:700;margin:0 0 16px 0;">Maserati Autonomous</h2>
      <p class="lede" style="margin-bottom:14px;">During our tour, we had the incredible chance to inspect the custom-engineered autonomous racing Maserati MC20 (MC20 Cielo) developed by Politecnico's very own AIDA / PoliMOVE research group.</p>
      <p class="lede">This record-breaking monster serves as the ultimate proof of how high-speed control, safety loops, and advanced sensor suites transfer from scientific projects to real road vehicles.</p>
      <div class="kicker-rule"></div>
    </div>
    <div class="img-side">
    <div class="image-side-stage">
      <div class="img-frame" data-img="maserati.jpg" data-label="AIDA Maserati MC20" style="border-radius:0;border:none;">
        <div class="corner-tag">FIG. 07 — MC20 CIELO</div>
      </div>
    </div>
    </div>
  </div>
</section>

<!-- 09 — CLOSING -->
<section class="slide closing-slide">
  <h1>Grazie<span class="dot">!</span></h1>
  <div class="sub">Questions &amp; Answers</div>
  <div class="kicker-rule"></div>
  <div class="meta">
    Presented by <b>Group 4 (The Best Group)</b><br>
    Politecnico di Milano TechCamp · Intelligent &amp; Autonomous Driving
  </div>
</section>

`;
