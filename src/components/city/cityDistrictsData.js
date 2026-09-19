import { 
  Building2, 
  Cpu, 
  Activity, 
  Dna, 
  Anchor, 
  Compass, 
  Sprout, 
  Zap, 
  Layers, 
  Boxes, 
  Send, 
  Train, 
  Radio, 
  Satellite 
} from 'lucide-react';

export const CITY_DISTRICTS = [
  {
    id: "manufacturing",
    name: "Manufacturing & Robotics",
    shortLabel: "Manufacturing",
    icon: Cpu,
    category: "Industrial Automation",
    color: "#7928CA",
    accentColor: "#A855F7",
    position: [-18, 4.5, -8], // 3D world space position
    markerOffset: [0, 6, 0],
    cameraTarget: {
      position: [-10, 18, 12],
      lookAt: [-18, 2, -8]
    },
    useCaseIds: ["t6-u1", "t6-u2"],
    primaryCaseId: "t6-u1",
    tagline: "AI-driven robotic assembly, continuous kinematic optimization & real-time quality inspection.",
    simulationType: "Robotic Assembly Optimization",
    simulationStatus: "AI Kinematic Engine Active",
    technologies: ["Robotics", "Computer Vision", "Isaac Sim", "NVIDIA Omniverse", "Edge AI"]
  },
  {
    id: "commercial",
    name: "Commercial Real Estate & Smart City",
    shortLabel: "Commercial Real Estate",
    icon: Building2,
    category: "Infrastructure",
    color: "#00F2FE",
    accentColor: "#38BDF8",
    position: [0, 8, 2],
    markerOffset: [0, 10.5, 0],
    cameraTarget: {
      position: [12, 22, 22],
      lookAt: [0, 6, 2]
    },
    useCaseIds: ["t3-u2"],
    primaryCaseId: "t3-u2",
    tagline: "BIM alignment, drone photogrammetry & live digital construction drift monitoring.",
    simulationType: "3D BIM Drift Detection",
    simulationStatus: "Photogrammetry Stream Live",
    technologies: ["BIM / IFC", "Photogrammetry", "LiDAR", "OpenUSD", "Computer Vision"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Technology",
    shortLabel: "Healthcare",
    icon: Activity,
    category: "Healthcare",
    color: "#FF2E93",
    accentColor: "#F43F5E",
    position: [-12, 3.5, 18],
    markerOffset: [0, 5.5, 0],
    cameraTarget: {
      position: [-4, 15, 32],
      lookAt: [-12, 2, 18]
    },
    useCaseIds: ["t2-u1", "t2-u2"],
    primaryCaseId: "t2-u1",
    tagline: "AI-powered ICU organ digital twins and real-time AR-guided surgical navigation.",
    simulationType: "Dynamic Organ Hemodynamics",
    simulationStatus: "Live Vitals Telemetry Synced",
    technologies: ["Medical IoT", "HL7 / FHIR", "DICOM", "TensorRT", "AR Overlays"]
  },
  {
    id: "biotech",
    name: "Biotechnology & Research Labs",
    shortLabel: "Biotech Research",
    icon: Dna,
    category: "Biotechnology",
    color: "#00F2FE",
    accentColor: "#06B6D4",
    position: [20, 4, -14],
    markerOffset: [0, 6, 0],
    cameraTarget: {
      position: [28, 16, 2],
      lookAt: [20, 2, -14]
    },
    useCaseIds: ["t1-u1", "t1-u2"],
    primaryCaseId: "t1-u1",
    tagline: "Sensor-driven bioreactor digital twins and AR-assisted computer vision pipetting assistance.",
    simulationType: "Fermentation Yield Prediction",
    simulationStatus: "Bio-Sensor Loop Active",
    technologies: ["IoT Sensors", "OPC UA / MQTT", "DeepStream", "Omniverse", "OpenXR"]
  },
  {
    id: "ports",
    name: "Smart Ports & Maritime Logistics",
    shortLabel: "Ports & Harbor",
    icon: Anchor,
    category: "Logistics & Maritime",
    color: "#00E1D9",
    accentColor: "#0EA5E9",
    position: [-38, 2, -22],
    markerOffset: [0, 5, 0],
    cameraTarget: {
      position: [-26, 16, -6],
      lookAt: [-38, 1, -22]
    },
    useCaseIds: ["t7-u1", "t9-u1"],
    primaryCaseId: "t7-u1",
    tagline: "Automated container gantry operations, tide monitoring and live berthing digital replicas.",
    simulationType: "Vessel Berthing & Water Inundation",
    simulationStatus: "AIS & Radar Connected",
    technologies: ["AIS Telemetry", "SAR Radar", "GIS Mapping", "Omniverse", "Edge Computing"]
  },
  {
    id: "mining",
    name: "Mining & Energy Operations",
    shortLabel: "Mining & Energy",
    icon: Compass,
    category: "Mining",
    color: "#FF7849",
    accentColor: "#F97316",
    position: [8, 14, -36],
    markerOffset: [0, 7.5, 0],
    cameraTarget: {
      position: [18, 26, -18],
      lookAt: [8, 10, -36]
    },
    useCaseIds: ["t8-u1", "t8-u2"],
    primaryCaseId: "t8-u1",
    tagline: "Subterranean gas & structural sensors with AR remote expert collaboration in deep shafts.",
    simulationType: "Atmospheric Methane Monitoring",
    simulationStatus: "Mesh Sensor Network Live",
    technologies: ["Subsurface IoT", "Mesh Networks", "SCADA", "Thermal Vision", "OpenUSD"]
  },
  {
    id: "agriculture",
    name: "Smart Agriculture & Precision Farming",
    shortLabel: "Smart Farming",
    icon: Sprout,
    category: "Agriculture",
    color: "#05FFA1",
    accentColor: "#10B981",
    position: [32, 2.5, 12],
    markerOffset: [0, 5, 0],
    cameraTarget: {
      position: [38, 15, 26],
      lookAt: [32, 1, 12]
    },
    useCaseIds: ["t4-u1", "t4-u2"],
    primaryCaseId: "t4-u1",
    tagline: "Automated closed-loop irrigation, soil-moisture heatmaps and on-plant AR disease diagnosis.",
    simulationType: "Soil Moisture AI Forecasting",
    simulationStatus: "Irrigation Telemetry Active",
    technologies: ["LoRaWAN", "Soil Sensors", "Edge AI", "Computer Vision", "GIS Heatmaps"]
  },
  {
    id: "grid",
    name: "Smart Substation & Power Grid",
    shortLabel: "Power Grid",
    icon: Zap,
    category: "Energy",
    color: "#FFE600",
    accentColor: "#FBBF24",
    position: [24, 3, -2],
    markerOffset: [0, 5.5, 0],
    cameraTarget: {
      position: [32, 16, 12],
      lookAt: [24, 2, -2]
    },
    useCaseIds: ["t5-u1", "t5-u2"],
    primaryCaseId: "t5-u1",
    tagline: "Virtual breaker switching simulation, load-flow risk modeling and AR electrical panel inspection.",
    simulationType: "Virtual Load Flow & Switching",
    simulationStatus: "IEC 61850 Stream Connected",
    technologies: ["SCADA / RTU", "IEC 61850", "Power Simulation", "Thermal Vision", "Omniverse"]
  },
  {
    id: "warehousing",
    name: "Warehouse Automation & Robotics",
    shortLabel: "Warehousing",
    icon: Boxes,
    category: "Logistics",
    color: "#38EF7D",
    accentColor: "#22C55E",
    position: [-22, 3.5, 4],
    markerOffset: [0, 5, 0],
    cameraTarget: {
      position: [-12, 15, 18],
      lookAt: [-22, 2, 4]
    },
    useCaseIds: ["t10-u1"],
    primaryCaseId: "t10-u1",
    tagline: "Fleet-wide multi-agent path optimization, congestion prediction and AMR dynamic rerouting.",
    simulationType: "AMR Multi-Agent Route Planning",
    simulationStatus: "24/30 Robots Synchronized",
    technologies: ["AMRs / AGVs", "Isaac Sim", "LiDAR", "ROS 2 / MQTT", "Edge Gateway"]
  },
  {
    id: "additive",
    name: "Additive Manufacturing & 3D Lab",
    shortLabel: "3D Printing Lab",
    icon: Layers,
    category: "Advanced Manufacturing",
    color: "#00DFD8",
    accentColor: "#14B8A6",
    position: [-8, 3, -16],
    markerOffset: [0, 5, 0],
    cameraTarget: {
      position: [2, 14, -4],
      lookAt: [-8, 1, -16]
    },
    useCaseIds: ["t9-u1", "t9-u2"],
    primaryCaseId: "t9-u1",
    tagline: "Real-time layer defect detection, melt-pool monitoring and AR CAD-to-part alignment metrology.",
    simulationType: "Layer-by-Layer In-Situ Metrology",
    simulationStatus: "Computer Vision Active",
    technologies: ["Computer Vision", "CAD Digital Twin", "Marlin / Klipper API", "Edge PC", "TensorRT"]
  },
  {
    id: "drones",
    name: "Drone Delivery & Air Mobility",
    shortLabel: "Drone Ops",
    icon: Send,
    category: "Autonomous Logistics",
    color: "#00F2FE",
    accentColor: "#38BDF8",
    position: [12, 5.5, 18],
    markerOffset: [0, 6, 0],
    cameraTarget: {
      position: [22, 18, 30],
      lookAt: [12, 3, 18]
    },
    useCaseIds: ["t10-u2"],
    primaryCaseId: "t10-u2",
    tagline: "Real-time 3D flight corridor tracking, battery telemetry, and temperature-controlled medical cargo oversight.",
    simulationType: "Aerial Corridor Fleet Telemetry",
    simulationStatus: "MAVLink Sky Link Live",
    technologies: ["MAVLink / 5G", "GNSS / RTK", "3D City Twin", "Thermal Sensors", "OpenXR"]
  },
  {
    id: "rail",
    name: "Smart Rail, Metro & Bridges",
    shortLabel: "Rail & Metro",
    icon: Train,
    category: "Transportation",
    color: "#FFB800",
    accentColor: "#F59E0B",
    position: [-28, 2.5, 16],
    markerOffset: [0, 5, 0],
    cameraTarget: {
      position: [-16, 14, 28],
      lookAt: [-28, 1, 16]
    },
    useCaseIds: ["t3-u1"],
    primaryCaseId: "t3-u1",
    tagline: "Connected suspension bridge structural health digital twins with strain gauges & accelerometers.",
    simulationType: "Modal Vibration Frequency Twin",
    simulationStatus: "Strain Telemetry Streaming",
    technologies: ["Strain Gauges", "Accelerometers", "LoRaWAN", "Jetson Edge", "Omniverse"]
  },
  {
    id: "disaster",
    name: "Disaster Response & Satellite Intel",
    shortLabel: "Disaster Response",
    icon: Satellite,
    category: "Emergency Intelligence",
    color: "#00E1D9",
    accentColor: "#06B6D4",
    position: [-10, 4.5, -30],
    markerOffset: [0, 6, 0],
    cameraTarget: {
      position: [2, 16, -16],
      lookAt: [-10, 2, -30]
    },
    useCaseIds: ["t7-u2"],
    primaryCaseId: "t7-u2",
    tagline: "Aerial drone reconnaissance with AR damaged building overlay and real-time survivor hazard mapping.",
    simulationType: "Geospatial Hazard & Path Mapping",
    simulationStatus: "Drone Fleet Synchronized",
    technologies: ["SAR Satellite", "Thermal Drones", "GIS / DEM", "Spatial SLAM", "WebRTC"]
  }
];

export const CITY_DEFAULT_VIEW = {
  position: [28, 38, 48],
  lookAt: [0, 2, -2]
};
