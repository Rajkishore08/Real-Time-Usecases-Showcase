import React, { useState } from 'react';
import { 
  X, 
  Bot, 
  Cpu, 
  Sliders, 
  Layers, 
  Zap, 
  Compass, 
  ShieldCheck, 
  Activity, 
  Maximize2, 
  ExternalLink,
  ChevronRight,
  Eye,
  Radio,
  Satellite,
  Printer,
  Sparkles,
  CheckCircle2,
  Play,
  RotateCcw,
  Boxes,
  Microscope,
  Info,
  Tv,
  Glasses
} from 'lucide-react';

export default function RaieLabModal({ isOpen, onClose, onLaunchDemo }) {
  const [activeTab, setActiveTab] = useState('systems'); // 'systems', 'smartkit', 'simulator', 'tour'
  const [selectedSystemId, setSelectedSystemId] = useState('arm-robot');
  const [selectedKitCategory, setSelectedKitCategory] = useState('core');
  const [activeSimAction, setActiveSimAction] = useState(null);
  
  // Smart Kit Virtual Simulator State
  const [simRunning, setSimRunning] = useState(false);
  const [simDistance, setSimDistance] = useState(28); // cm (ultrasonic)
  const [simMotorSpeed, setSimMotorSpeed] = useState(75); // %
  const [simLineTrack, setSimLineTrack] = useState('center'); // 'left', 'center', 'right'
  const [simLedState, setSimLedState] = useState(true);
  const [simServoAngle, setSimServoAngle] = useState(90); // degrees

  if (!isOpen) return null;

  // 12 RAIE LAB SYSTEMS DATA (From User's Attached Infographic)
  const LAB_SYSTEMS = [
    {
      id: 'arm-robot',
      num: 2,
      name: 'Arm Robot (LeRobot SO-101)',
      category: 'Robotics & Embodied AI',
      badge: 'Hugging Face Ecosystem',
      source: 'Hiwonder.com • LeRobot SO-ARM101',
      purpose: 'Pick-and-place, manipulation & laboratory automation.',
      keyCapabilities: [
        'AI/ML-based neural motion control',
        'ROS2 & Hugging Face LeRobot support',
        'Real-world precision object handling',
        'Direct teleoperation & leader-follower arm mode'
      ],
      specs: {
        dof: '6-DOF (Degrees of Freedom)',
        payload: '500g continuous',
        interface: 'Python, ROS2, PyTorch',
        camera: 'Wrist-mounted RGB-D'
      },
      simStatus: '6-Axis Kinematics Online',
      actionLabel: 'Execute Grasp & Sort Routine'
    },
    {
      id: 'wheel-robot',
      num: 1,
      name: 'Wheel Robot (JetTank)',
      category: 'Autonomous Mobile Robots (AMR)',
      badge: 'NVIDIA Jetson Nano + LiDAR',
      source: 'Hiwonder.com • JetTank ROS Tank',
      purpose: 'Autonomous SLAM navigation, mapping & surveillance.',
      keyCapabilities: [
        'Autonomous indoor & rough terrain navigation',
        '360° RPLiDAR real-time mapping',
        'AI computer vision & obstacle avoidance',
        'ROS Melodic / Noetic integration'
      ],
      specs: {
        compute: 'NVIDIA Jetson Nano 4GB',
        sensors: 'RPLiDAR A1 + 3D Depth Camera',
        drive: 'Continuous Rubber Tracked Tread',
        power: '11.1V 6000mAh Lipo'
      },
      simStatus: 'LiDAR Telemetry Streaming (10Hz)',
      actionLabel: 'Run Autonomous SLAM Mapping'
    },
    {
      id: 'biped-robot',
      num: 3,
      name: 'BiPed Robot (Ainex)',
      category: 'Humanoid Robotics',
      badge: '24-DOF ROS Humanoid',
      source: 'Hiwonder.com • Ainex 24-DOF',
      purpose: 'Human-like motion, AI vision research & embodied locomotion.',
      keyCapabilities: [
        'Dynamic bipedal walking & balance recovery',
        '24 high-voltage serial bus smart servos',
        'AI vision face & object tracking',
        'Deep reinforcement learning locomotion'
      ],
      specs: {
        servos: '24x High-Precision Bus Servos',
        height: '42cm Solid Aluminum Skeleton',
        vision: 'HD Wide-Angle Camera Head',
        os: 'Ubuntu 20.04 + ROS2'
      },
      simStatus: 'Gait Stabilization Active',
      actionLabel: 'Trigger Bipedal Walking Gait'
    },
    {
      id: 'walking-robot',
      num: 4,
      name: 'Walking Robot (JetHexa)',
      category: 'Hexapod Legged Robotics',
      badge: '6-Leg Hexapod on Jetson',
      source: 'Hiwonder.com • JetHexa Hexapod',
      purpose: 'Rough terrain exploration, search & rescue, locomotion.',
      keyCapabilities: [
        'Omnidirectional 6-legged dynamic walking',
        'AI perception & real-time terrain adaptation',
        'Inverse kinematics with tripod/wave gaits',
        'ROS2 navigation stack'
      ],
      specs: {
        legs: '6 Independent 3-DOF Articulated Legs (18 Servos)',
        processor: 'Jetson Nano AI Processor',
        vision: 'Depth 3D Stereo Camera',
        payload: '1.2 kg auxiliary sensors'
      },
      simStatus: 'Hexapod Inverse Kinematics Calibrated',
      actionLabel: 'Simulate All-Terrain Traverse'
    },
    {
      id: 'iot-rail',
      num: 5,
      name: 'Industrial IoT (Raspberry Pi 5 + DIN Rail)',
      category: 'Edge Computing & SCADA',
      badge: 'Industrial DIN Rail Form Factor',
      source: 'Industrial IoT Architecture',
      purpose: 'Industrial IoT edge computing, data acquisition & telemetry.',
      keyCapabilities: [
        'Real-time sensor telemetry & processing',
        'Industrial standard DIN rail mounting enclosure',
        'OPC UA, MQTT & Modbus TCP protocols',
        'Hardware watchdog & failover'
      ],
      specs: {
        soc: 'Raspberry Pi 5 (Quad 2.4GHz Cortex-A76)',
        io: 'Optocoupled Digital I/O & RS485',
        connectivity: 'Dual Gigabit Ethernet, WiFi 6, BLE',
        power: '24V DC Industrial Bus'
      },
      simStatus: 'Modbus Telemetry Connected (100ms)',
      actionLabel: 'Read Industrial Modbus Stream'
    },
    {
      id: 'satellite-kit',
      num: 6,
      name: 'Satellite (CubeSat Kit Gen 2)',
      category: 'Aerospace & Space Technology',
      badge: 'Real Satellite-Grade Components',
      source: 'HexStar Universe • CubeSat Gen 2',
      purpose: 'Space technology research, satellite communication, payload testing.',
      keyCapabilities: [
        '1U / 2U CubeSat standard mechanical chassis',
        'Live orbital telemetry web dashboard',
        'Deployable solar array simulation & power system',
        'Magnetometer, gyroscope & sun sensors'
      ],
      specs: {
        formFactor: '1U Standard CubeSat (10x10x10 cm)',
        radio: 'UHF/VHF Transceiver & Telemetry Beacon',
        sensors: 'IMU, Temperature, Radiation Dosimeter',
        eps: 'Solar MPPT Electrical Power System'
      },
      simStatus: 'Orbital Telemetry Beacon Active',
      actionLabel: 'Transmit CubeSat Telemetry Ping'
    },
    {
      id: '3d-printer',
      num: 7,
      name: '3D Printing (Bambu Lab P1S)',
      category: 'Additive Manufacturing & Prototyping',
      badge: 'Enclosed CoreXY 500mm/s',
      source: 'BambuLab.com • P1S Enclosed',
      purpose: 'Rapid robotics prototyping, custom mechanical enclosures.',
      keyCapabilities: [
        'High-speed CoreXY printing up to 500 mm/s',
        'Enclosed build chamber for carbon-fiber nylon',
        'Multi-color / multi-material automatic feeder',
        'AI camera bed leveling & spaghetti detection'
      ],
      specs: {
        buildVolume: '256 x 256 x 256 mm',
        maxSpeed: '500 mm/s, 20000 mm/s² acceleration',
        hotend: '300°C All-Metal Nozzle',
        materials: 'PLA, PETG, ABS, ASA, Carbon Fiber'
      },
      simStatus: 'Extruder Temp: 220°C • Bed: 60°C (Ready)',
      actionLabel: 'Queue Robot Chassis Print Job'
    },
    {
      id: 'drone-fpv',
      num: 8,
      name: 'Drone (10-inch FPV Inspection Kit)',
      category: 'Aerial Robotics',
      badge: 'Long-Range Heavy-Lift FPV',
      source: 'Industrial FPV Ecosystem',
      purpose: 'Aerial infrastructure inspection, mapping & surveillance.',
      keyCapabilities: [
        'High-speed long-range aerial surveillance',
        'High-payload integration for LiDAR & multispectral sensors',
        'GPS autonomous waypoint navigation & Return-to-Home',
        'Real-time low-latency HD video transmission'
      ],
      specs: {
        frame: '10-inch Carbon Fiber Long-Range Frame',
        motors: '3115 900KV Brushless Motors',
        flightController: 'F722 + ArduPilot / Betaflight',
        flightTime: '28 minutes with 6S 4500mAh'
      },
      simStatus: 'GPS 3D Fix (18 Satellites)',
      actionLabel: 'Launch Autonomous Flight Path'
    },
    {
      id: 'ai-station',
      num: 9,
      name: 'AI Superstation (Alienware ACT1250)',
      category: 'AI Compute & Simulation',
      badge: 'High-Performance Neural Compute',
      source: 'Industrial AI Workstation',
      purpose: 'AI model training, robotics physics simulation, digital twins.',
      keyCapabilities: [
        'Large-scale deep learning model training',
        'NVIDIA Isaac Sim & Omniverse digital twin physics',
        'Multi-robot fleet simulation in synthetic environments',
        'Real-time inference & edge deployment pipeline'
      ],
      specs: {
        gpu: 'NVIDIA RTX 4090 24GB GDDR6X',
        cpu: 'Intel Core i9-14900KF (24 Cores, 6.0 GHz)',
        ram: '64GB DDR5 5600MHz',
        storage: '4TB NVMe Gen4 SSD'
      },
      simStatus: 'Isaac Sim CUDA Workers Ready (100% Health)',
      actionLabel: 'Run Neural Model Inference'
    },
    {
      id: 'holographic-box',
      num: 10,
      name: '3D Holographic Display Box',
      category: 'Spatial Visualization',
      badge: 'Life-Size Volumetric Display',
      source: 'Custom ARCS Spatial Solution',
      purpose: '3D digital twin visualization, spatial collaboration.',
      keyCapabilities: [
        'Volumetric floating holographic projection',
        'Glasses-free 3D multi-angle viewing',
        'Interactive real-time model manipulation',
        'Pepper’s Ghost optical projection alignment'
      ],
      specs: {
        display: 'High-Brightness 4K OLED Backlight',
        optics: 'Anti-Reflective 45° Beam Splitter Glass',
        tracking: 'Gesture & Leap Motion Sensor',
        fps: '120Hz Ultra-Low Latency'
      },
      simStatus: 'Holographic Beam Active (120 FPS)',
      actionLabel: 'Project Holographic Digital Twin'
    },
    {
      id: 'ar-vr',
      num: 11,
      name: 'Spatial Computing (Meta Quest 3, 512GB)',
      category: 'Extended Reality (XR)',
      badge: 'Mixed Reality & Teleoperation',
      source: 'Meta Quest 3 (512GB)',
      purpose: 'Immersive industrial training, robot teleoperation, spatial UI.',
      keyCapabilities: [
        'Full-color high-resolution pass-through mixed reality',
        'Direct robotic arm teleoperation via hand tracking',
        'Spatial digital twin inspection in 1:1 scale',
        'Multi-user remote engineering collaboration'
      ],
      specs: {
        optics: 'Pancake Lenses, 2064x2208 per eye',
        processor: 'Snapdragon XR2 Gen 2',
        tracking: '6-DOF Inside-Out & Direct Hand Tracking',
        storage: '512GB High-Speed Flash'
      },
      simStatus: 'Spatial Anchor Synced • 90 FPS',
      actionLabel: 'Enter 1:1 Spatial Teleoperation'
    },
    {
      id: 'dog-robot',
      num: 12,
      name: 'Dog Robot - ROS Small (RosPug)',
      category: 'Quadruped Bio-Robotics',
      badge: '12-DOF Quadruped ROS Dog',
      source: 'Hiwonder.com • RosPug Quadruped',
      purpose: 'Inspection, campus navigation, AI vision & agility research.',
      keyCapabilities: [
        'Dynamic stair climbing & all-terrain quadruped balance',
        'AI vision face & gesture recognition',
        'Compact programmable ROS / Python robotics stack',
        'Autonomous patrol & thermal inspection'
      ],
      specs: {
        servos: '12 High-Torque Coreless Bus Servos',
        imu: '6-Axis High-Rate Gyro & Accelerometer',
        battery: '8.4V Li-ion High-Discharge',
        framework: 'ROS2 / Python Open-Source'
      },
      simStatus: 'Balance Control Active (200Hz Loop)',
      actionLabel: 'Trigger Quadruped Patrol Stance'
    }
  ];

  // 12 SMART KIT CATEGORIES DATA (From User's Attached Infographic)
  const SMART_KIT_CATEGORIES = [
    {
      id: 'core',
      name: '1. Core Controllers & Expansion',
      items: [
        { name: 'ESP32 Development Board', desc: 'Dual-core MCU with Wi-Fi, Bluetooth & edge AI processing for smart IoT.' },
        { name: 'Arduino UNO R3', desc: 'Standard reliable 8-bit microcontroller for real-time sensor/actuator control.' },
        { name: 'Sensor / Servo Shield V5.0', desc: 'Multi-port header expansion board for easy plug-and-play servo & sensor wiring.' }
      ]
    },
    {
      id: 'display',
      name: '2. Display & Data Storage',
      items: [
        { name: '0.96" OLED Display (I2C SSD1306)', desc: '128x64 high-contrast blue/white display for real-time telemetry readout.' },
        { name: 'Micro-SD Card Module (SPI)', desc: 'High-speed SPI data logger interface for blackbox sensor telemetry.' },
        { name: '16 GB High-Endurance SD Card', desc: 'Stores calibration matrices, sensor logs, and system events.' }
      ]
    },
    {
      id: 'sensors',
      name: '3. Sensors — See, Sense, Understand',
      items: [
        { name: 'Ultrasonic Module (HC-SR04)', desc: 'Precision sonar distance measurement (2cm to 400cm) for obstacle detection.' },
        { name: 'Four-Way Line Tracking Sensor', desc: 'Multi-channel IR sensor array for high-speed autonomous line-following.' },
        { name: 'IR Obstacle Avoidance Modules (x2)', desc: 'Infrared proximity switches for perimeter collision avoidance.' },
        { name: 'DHT11 Climate Sensor', desc: 'Digital temperature and relative humidity environmental sensor.' },
        { name: 'PIR Motion Sensor (HC-SR501)', desc: 'Pyroelectric infrared motion detection for presence and security.' },
        { name: 'LTR390 UV & Ambient Light Sensor', desc: 'Ultra-sensitive ultraviolet index and ambient lux light measurement.' },
        { name: 'LDR Photoresistor Modules (x2)', desc: 'Light intensity sensing for automatic headlights & solar tracking.' }
      ]
    },
    {
      id: 'actuators',
      name: '4. Actuators & Motion',
      items: [
        { name: 'SG90 Micro Servo Motor', desc: '180° precision angular positional control for sonar scanner head and robot grippers.' },
        { name: 'TT Geared DC Motors (x4)', desc: '1:48 gear ratio high-torque drive motors for autonomous 4WD mobility.' },
        { name: 'High-Traction Rubber Wheels (x4)', desc: '65mm rubber grip tires for smooth indoor and outdoor terrain traction.' },
        { name: 'L298N Dual H-Bridge Motor Driver', desc: 'Dual-channel high-current driver with PWM speed & directional control.' }
      ]
    },
    {
      id: 'structure',
      name: '5. Structure & Mechanics',
      items: [
        { name: 'Laser-Cut Acrylic Chassis & Brackets', desc: 'Dual-deck transparent chassis with multi-sensor mounting slots.' },
        { name: 'Brass Standoffs & Fastening Hardware', desc: 'M3 hex standoffs, screws, locknuts, and caster bearings.' },
        { name: 'Precision Screwdriver Toolkit', desc: 'Ergonomic assembly and rapid maintenance tools.' }
      ]
    },
    {
      id: 'power',
      name: '6. Power & Connectivity',
      items: [
        { name: 'Rechargeable Li-Ion Battery Pack', desc: 'High-discharge portable power pack for untethered autonomous field testing.' },
        { name: 'Smart Li-Ion Balance Charger', desc: 'Safe multi-stage charging unit with overcharge protection.' },
        { name: 'Micro USB & Type-C Programming Cables', desc: 'Heavy-duty data and firmware flashing cables.' }
      ]
    },
    {
      id: 'alerts',
      name: '7. Alerts & Indication',
      items: [
        { name: 'Passive Piezo Buzzer', desc: 'PWM tone generator for audible audio alerts, beeps, and diagnostic melody output.' },
        { name: 'Active Alarm Buzzer', desc: 'Fixed-frequency audible alarm for critical fault events.' }
      ]
    },
    {
      id: 'leds',
      name: '8. Visual Indicators',
      items: [
        { name: 'Red LEDs (x5)', desc: 'Alert, stop, and emergency fault indication.' },
        { name: 'Green LEDs (x5)', desc: 'Operational status, ready state, and telemetry active.' },
        { name: 'Yellow LEDs (x5)', desc: 'Warning, turning indicator, and sensor calibrating.' },
        { name: 'RGB Multi-Color LEDs (x2)', desc: 'Dynamic multi-color mode and state indication.' }
      ]
    },
    {
      id: 'inputs',
      name: '9. User Input',
      items: [
        { name: 'Tactile Push Button Switches (x6)', desc: 'Manual menu selection, mode switching, and emergency stop inputs.' },
        { name: '10K Precision Rotary Potentiometer', desc: 'Analog input for speed calibration, threshold setting, and steering.' }
      ]
    },
    {
      id: 'passive',
      name: '10. Passive Components',
      items: [
        { name: '30-Value Resistor Assortment Pack', desc: 'Pull-up, pull-down, and current limiting resistors for custom circuits.' },
        { name: 'Solderless Prototyping Breadboards', desc: 'High-reliability breadboards for rapid solderless experimental wiring.' }
      ]
    },
    {
      id: 'automation',
      name: '11. Control & Automation',
      items: [
        { name: '5V 2-Channel Relay Module', desc: 'Optocoupled relays to switch heavy external AC/DC loads (pumps, lights, motors).' }
      ]
    },
    {
      id: 'wiring',
      name: '12. Cables & Wiring',
      items: [
        { name: 'Dupont Ribbon Cables (M-M, M-F, F-F x25)', desc: 'Color-coded flexible connection cables for all sensors and modules.' },
        { name: 'U-Shape Solderless Breadboard Jumper Set', desc: 'Pre-formed jumper wires for clean, organized breadboard prototyping.' }
      ]
    }
  ];

  const currentSystem = LAB_SYSTEMS.find(s => s.id === selectedSystemId) || LAB_SYSTEMS[0];

  const handleSimulateAction = (sys) => {
    setActiveSimAction(sys.id);
    setTimeout(() => {
      setActiveSimAction(null);
    }, 2400);
  };

  return (
    <div className="raie-modal-backdrop" onClick={onClose}>
      <div className="raie-modal-container glass-panel-luxury" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <header className="raie-modal-header">
          <div className="raie-header-left">
            <div className="raie-badge-pill">
              <span className="raie-pulse-dot" />
              <span>ARCS GLOBAL CAPABILITY CENTER • INNOVATION LAB</span>
            </div>
            <h2 className="raie-main-title">
              ARCS - <span className="gradient-text">RAIE Lab</span>
            </h2>
            <p className="raie-subtitle">
              Research Academy of Innovation and Excellence • Embodied AI, Robotics, Space &amp; Smart Kit Toolkit
            </p>
          </div>

          <div className="raie-header-right">
            {/* View Mode Tabs */}
            <div className="raie-nav-tabs">
              <button 
                className={`raie-tab-btn ${activeTab === 'systems' ? 'active' : ''}`}
                onClick={() => setActiveTab('systems')}
              >
                <Bot size={16} />
                <span>12 Lab Systems</span>
              </button>
              <button 
                className={`raie-tab-btn ${activeTab === 'smartkit' ? 'active' : ''}`}
                onClick={() => setActiveTab('smartkit')}
              >
                <Cpu size={16} />
                <span>Smart Kit Toolkit</span>
              </button>
              <button 
                className={`raie-tab-btn ${activeTab === 'simulator' ? 'active' : ''}`}
                onClick={() => setActiveTab('simulator')}
              >
                <Activity size={16} />
                <span>Virtual Robot Sim</span>
              </button>
              <button 
                className={`raie-tab-btn ${activeTab === 'tour' ? 'active' : ''}`}
                onClick={() => setActiveTab('tour')}
              >
                <Eye size={16} />
                <span>Real Lab Gallery</span>
              </button>
            </div>

            <button className="raie-close-btn" onClick={onClose} aria-label="Close RAIE Lab modal">
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Modal Main Body */}
        <div className="raie-modal-body">
          {/* TAB 1: 12 LAB SYSTEMS EXPLORER */}
          {activeTab === 'systems' && (
            <div className="raie-systems-layout">
              {/* Left Sidebar: 12 Systems Selection Grid */}
              <div className="raie-systems-sidebar">
                <div className="sidebar-header-label">
                  <span>SELECT HARDWARE SYSTEM (12 TOTAL)</span>
                </div>
                <div className="systems-list-scroll">
                  {LAB_SYSTEMS.map((sys) => (
                    <button
                      key={sys.id}
                      className={`system-list-item ${selectedSystemId === sys.id ? 'active' : ''}`}
                      onClick={() => setSelectedSystemId(sys.id)}
                    >
                      <div className="system-item-num">{sys.num}</div>
                      <div className="system-item-info">
                        <span className="system-item-title">{sys.name}</span>
                        <span className="system-item-cat">{sys.category}</span>
                      </div>
                      <ChevronRight size={14} className="system-chevron" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Main Stage: Selected System Deep-Dive */}
              <div className="raie-system-stage glass-panel-subtle">
                <div className="stage-top-meta">
                  <span className="stage-num-badge">SYSTEM #{currentSystem.num}</span>
                  <span className="stage-badge-source">{currentSystem.source}</span>
                  <span className="stage-live-telemetry">
                    <Radio size={13} className="telemetry-pulse-icon" />
                    {currentSystem.simStatus}
                  </span>
                </div>

                <h3 className="stage-system-title">{currentSystem.name}</h3>
                <p className="stage-system-purpose">{currentSystem.purpose}</p>

                {/* Key Capabilities */}
                <div className="stage-section-block">
                  <h4 className="stage-section-title">
                    <Sparkles size={15} className="cyan-glow-icon" />
                    Key Capabilities &amp; Architecture
                  </h4>
                  <div className="capabilities-grid">
                    {currentSystem.keyCapabilities.map((cap, i) => (
                      <div key={i} className="cap-item">
                        <CheckCircle2 size={16} className="cap-check-icon" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="stage-section-block">
                  <h4 className="stage-section-title">
                    <Cpu size={15} className="cyan-glow-icon" />
                    Technical Specifications
                  </h4>
                  <div className="specs-table-grid">
                    {Object.entries(currentSystem.specs).map(([k, v], i) => (
                      <div key={i} className="spec-pill">
                        <span className="spec-key">{k.toUpperCase()}</span>
                        <span className="spec-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Simulated Command Trigger */}
                <div className="stage-action-bar">
                  <button 
                    className={`stage-action-btn ${activeSimAction === currentSystem.id ? 'is-running' : ''}`}
                    onClick={() => handleSimulateAction(currentSystem)}
                  >
                    <Play size={16} />
                    <span>
                      {activeSimAction === currentSystem.id 
                        ? 'EXECUTING COMMAND STREAM...' 
                        : currentSystem.actionLabel}
                    </span>
                  </button>
                  {activeSimAction === currentSystem.id && (
                    <span className="sim-feedback-tag">
                      ✓ ROS2 Node Published / Telemetry Synced
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SMART KIT COMPLETE HARDWARE TOOLKIT */}
          {activeTab === 'smartkit' && (
            <div className="raie-smartkit-layout">
              <div className="smartkit-header-banner">
                <div className="banner-left">
                  <span className="smartkit-eyebrow">ARCS GLOBAL CAPABILITY CENTER</span>
                  <h3 className="smartkit-title">EVERY COMPONENT. A REAL PURPOSE.</h3>
                  <p className="smartkit-desc">
                    Not a random collection — a complete toolkit for real-world innovation spanning Manufacturing, Energy, Infrastructure, Agriculture, Healthcare, and Smart Cities.
                  </p>
                </div>
                <div className="banner-right-badge">
                  <Boxes size={28} className="cyan-glow-icon" />
                  <div className="badge-text">
                    <strong>ONE KIT.</strong>
                    <span>ENDLESS POSSIBILITIES.</span>
                  </div>
                </div>
              </div>

              {/* 12 Smart Kit Component Categories Grid */}
              <div className="smartkit-categories-grid">
                {SMART_KIT_CATEGORIES.map((cat) => (
                  <div 
                    key={cat.id} 
                    className={`kit-category-card ${selectedKitCategory === cat.id ? 'selected' : ''}`}
                    onClick={() => setSelectedKitCategory(cat.id)}
                  >
                    <div className="kit-cat-header">
                      <span className="kit-cat-title">{cat.name}</span>
                      <span className="kit-cat-count">{cat.items.length} items</span>
                    </div>
                    <div className="kit-items-list">
                      {cat.items.map((item, idx) => (
                        <div key={idx} className="kit-sub-item">
                          <strong className="sub-item-name">{item.name}</strong>
                          <span className="sub-item-desc">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: VIRTUAL SMART KIT ROBOT SIMULATOR */}
          {activeTab === 'simulator' && (
            <div className="raie-simulator-layout">
              <div className="sim-control-panel glass-panel-subtle">
                <h3 className="sim-panel-title">
                  <Bot size={18} className="cyan-glow-icon" />
                  Smart Kit 4WD Obstacle Avoidance Robot Simulator
                </h3>
                <p className="sim-panel-desc">
                  Interactive real-time emulator of the Smart Kit Robot Car with ultrasonic sonar sensor and motor control.
                </p>

                {/* Ultrasonic Distance Slider */}
                <div className="sim-control-group">
                  <div className="control-label-row">
                    <span>Sonar Distance (HC-SR04):</span>
                    <strong>{simDistance} cm</strong>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="150" 
                    value={simDistance} 
                    onChange={e => setSimDistance(Number(e.target.value))}
                    className="sim-slider"
                  />
                  <div className="distance-status-tag">
                    {simDistance < 20 ? (
                      <span className="status-danger">⚠️ OBSTACLE DETECTED! INITIATING REVERSE &amp; TURN</span>
                    ) : simDistance < 50 ? (
                      <span className="status-warn">⚡ APPROACHING OBSTACLE — SCANNING SERVO</span>
                    ) : (
                      <span className="status-ok">✓ CLEAR PATHWAY — FULL SPEED AHEAD</span>
                    )}
                  </div>
                </div>

                {/* Motor Speed Slider */}
                <div className="sim-control-group">
                  <div className="control-label-row">
                    <span>PWM Motor Speed (L298N):</span>
                    <strong>{simMotorSpeed}%</strong>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={simMotorSpeed} 
                    onChange={e => setSimMotorSpeed(Number(e.target.value))}
                    className="sim-slider"
                  />
                </div>

                {/* Servo Angle Slider */}
                <div className="sim-control-group">
                  <div className="control-label-row">
                    <span>SG90 Sonar Servo Angle:</span>
                    <strong>{simServoAngle}°</strong>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="180" 
                    value={simServoAngle} 
                    onChange={e => setSimServoAngle(Number(e.target.value))}
                    className="sim-slider"
                  />
                </div>

                {/* State Toggles */}
                <div className="sim-toggle-row">
                  <button 
                    className={`sim-action-btn ${simRunning ? 'running' : ''}`}
                    onClick={() => setSimRunning(!simRunning)}
                  >
                    <Play size={16} />
                    <span>{simRunning ? 'PAUSE SIMULATION' : 'START SIMULATION'}</span>
                  </button>

                  <button 
                    className="sim-reset-btn"
                    onClick={() => {
                      setSimDistance(28);
                      setSimMotorSpeed(75);
                      setSimServoAngle(90);
                      setSimRunning(false);
                    }}
                  >
                    <RotateCcw size={16} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Virtual Robot Diagram & Telemetry Screen */}
              <div className="sim-canvas-viewport glass-panel-subtle">
                <div className="virtual-robot-hud">
                  <div className="hud-metric">
                    <span className="hud-label">SONAR RANGE</span>
                    <span className="hud-val">{simDistance} cm</span>
                  </div>
                  <div className="hud-metric">
                    <span className="hud-label">MOTOR PWM</span>
                    <span className="hud-val">{simMotorSpeed * 2.55 | 0} / 255</span>
                  </div>
                  <div className="hud-metric">
                    <span className="hud-label">SERVO PAN</span>
                    <span className="hud-val">{simServoAngle}°</span>
                  </div>
                </div>

                {/* Visual Robot Chassis Schematic */}
                <div className="robot-chassis-render">
                  <div className="ultrasonic-eyes" style={{ transform: `rotate(${simServoAngle - 90}deg)` }}>
                    <div className="sonar-transducer left" />
                    <div className="sonar-transducer right" />
                    <div className="sonar-beam" style={{ width: `${Math.min(simDistance * 1.5, 180)}px` }} />
                  </div>
                  <div className="chassis-body">
                    <span className="chassis-brand">SMART KIT 4WD</span>
                    <div className="mcu-chip">ESP32</div>
                  </div>
                  <div className="chassis-wheels">
                    <div className={`wheel front-l ${simRunning ? 'spin' : ''}`} />
                    <div className={`wheel front-r ${simRunning ? 'spin' : ''}`} />
                    <div className={`wheel rear-l ${simRunning ? 'spin' : ''}`} />
                    <div className={`wheel rear-r ${simRunning ? 'spin' : ''}`} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: REAL LAB GALLERY & TOUR */}
          {activeTab === 'tour' && (
            <div className="raie-gallery-layout">
              <div className="gallery-card primary-photo-card">
                <img 
                  src="/images/raie_lab/raie_lab_room.jpg" 
                  alt="RAIE Lab Facilities" 
                  className="gallery-photo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="photo-caption">
                  <h4>Research Academy Of Innovation and Excellence (RAIE) Lab</h4>
                  <p>Equipped with LeRobot SO-ARM101, Ainex Humanoids, JetTank ROS Rovers, and Bambu Lab 3D Printing Arrays.</p>
                </div>
              </div>

              <div className="gallery-grid-row">
                <div className="gallery-card">
                  <img 
                    src="/images/raie_lab/smart_kit_assembled.jpg" 
                    alt="Assembled Smart Kit Robot" 
                    className="gallery-photo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="photo-caption">
                    <h4>Assembled Smart Kit Robot &amp; Modular Breadboards</h4>
                    <p>Obstacle avoiding ultrasonic robot with rechargeable battery pack and motor drivers.</p>
                  </div>
                </div>

                <div className="gallery-card">
                  <img 
                    src="/images/raie_lab/smart_kit_infographic.jpg" 
                    alt="Smart Kit Components" 
                    className="gallery-photo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="photo-caption">
                    <h4>Smart Kit Complete Component Architecture</h4>
                    <p>12 hardware domains supporting real-world sensor integration.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
