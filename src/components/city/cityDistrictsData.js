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
  Satellite 
} from 'lucide-react';

export const CITY_DISTRICTS = [
  {
    id: "commercial",
    name: "Commercial Real Estate & Smart City",
    shortLabel: "Commercial Real Estate",
    icon: Building2,
    category: "Infrastructure",
    color: "#00F2FE",
    accentColor: "#38BDF8",
    position: [0, 3, 0],
    markerOffset: [0, 16, 0],
    cameraTarget: {
      position: [24, 32, 32],
      lookAt: [0, 6, 0]
    },
    useCaseIds: ["t3-u2"],
    primaryCaseId: "t3-u2",
    tagline: "BIM alignment, drone photogrammetry & live digital construction drift monitoring.",
    simulationType: "3D BIM Drift Detection",
    simulationStatus: "Photogrammetry Stream Live",
    technologies: ["BIM / IFC", "Photogrammetry", "LiDAR", "OpenUSD", "Computer Vision"]
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Robotics",
    shortLabel: "Manufacturing",
    icon: Cpu,
    category: "Industrial Automation",
    color: "#7928CA",
    accentColor: "#A855F7",
    position: [-30, 3, -32],
    markerOffset: [0, 8, 0],
    cameraTarget: {
      position: [-14, 22, -10],
      lookAt: [-30, 3, -32]
    },
    useCaseIds: ["t6-u1", "t6-u2"],
    primaryCaseId: "t6-u1",
    tagline: "AI-driven robotic assembly, continuous kinematic optimization & real-time quality inspection.",
    simulationType: "Robotic Assembly Optimization",
    simulationStatus: "AI Kinematic Engine Active",
    technologies: ["Robotics", "Computer Vision", "Isaac Sim", "NVIDIA Omniverse", "Edge AI"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Technology",
    shortLabel: "Healthcare",
    icon: Activity,
    category: "Healthcare",
    color: "#FF2E93",
    accentColor: "#F43F5E",
    position: [-26, 3, 38],
    markerOffset: [0, 9, 0],
    cameraTarget: {
      position: [-10, 22, 58],
      lookAt: [-26, 3, 38]
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
    position: [34, 3, -28],
    markerOffset: [0, 8, 0],
    cameraTarget: {
      position: [50, 22, -8],
      lookAt: [34, 3, -28]
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
    position: [-72, 1.8, -26],
    markerOffset: [0, 9, 0],
    cameraTarget: {
      position: [-54, 22, -4],
      lookAt: [-72, 2, -26]
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
    position: [24, 10, -70],
    markerOffset: [0, 11, 0],
    cameraTarget: {
      position: [40, 28, -48],
      lookAt: [24, 8, -70]
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
    position: [66, 3, 22],
    markerOffset: [0, 8, 0],
    cameraTarget: {
      position: [80, 22, 44],
      lookAt: [66, 3, 22]
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
    position: [58, 3, -48],
    markerOffset: [0, 9, 0],
    cameraTarget: {
      position: [72, 24, -26],
      lookAt: [58, 3, -48]
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
    name: "Walmart Distribution Center & Logistics",
    shortLabel: "Walmart DC Hub",
    icon: Boxes,
    category: "Logistics",
    color: "#38EF7D",
    accentColor: "#22C55E",
    position: [-58, 3, 6],
    markerOffset: [0, 8, 0],
    cameraTarget: {
      position: [-40, 22, 24],
      lookAt: [-58, 3, 6]
    },
    useCaseIds: ["t10-u1"],
    primaryCaseId: "t10-u1",
    tagline: "Fleet-wide multi-agent AMR path optimization, 53ft trailer staging and cross-docking.",
    simulationType: "AMR Multi-Agent Route Planning",
    simulationStatus: "24/30 Robots Synchronized",
    technologies: ["AMRs / AGVs", "Isaac Sim", "LiDAR", "ROS 2 / MQTT", "Edge Gateway"]
  },
  {
    id: "drones",
    name: "Autonomous Drone Delivery Station",
    shortLabel: "Drone Vertiport",
    icon: Send,
    category: "Autonomous Logistics",
    color: "#00F2FE",
    accentColor: "#38BDF8",
    position: [-54, 3, 28],
    markerOffset: [0, 8, 0],
    cameraTarget: {
      position: [-36, 20, 46],
      lookAt: [-54, 3, 28]
    },
    useCaseIds: ["t10-u2"],
    primaryCaseId: "t10-u2",
    tagline: "Vertiport air corridor dispatch, multi-stop citywide parcel delivery and battery swap telemetry.",
    simulationType: "Aerial Corridor Fleet Telemetry",
    simulationStatus: "MAVLink Sky Link Live",
    technologies: ["MAVLink / 5G", "GNSS / RTK", "3D City Twin", "Thermal Sensors", "OpenXR"]
  },
  {
    id: "additive",
    name: "Additive Manufacturing & 3D Lab",
    shortLabel: "3D Printing Lab",
    icon: Layers,
    category: "Advanced Manufacturing",
    color: "#00DFD8",
    accentColor: "#14B8A6",
    position: [-6, 3, -48],
    markerOffset: [0, 8, 0],
    cameraTarget: {
      position: [10, 20, -28],
      lookAt: [-6, 3, -48]
    },
    useCaseIds: ["t9-u1", "t9-u2"],
    primaryCaseId: "t9-u1",
    tagline: "Real-time layer defect detection, melt-pool monitoring and AR CAD-to-part alignment metrology.",
    simulationType: "Layer-by-Layer In-Situ Metrology",
    simulationStatus: "Computer Vision Active",
    technologies: ["Computer Vision", "CAD Digital Twin", "Marlin / Klipper API", "Edge PC", "TensorRT"]
  },
  {
    id: "rail",
    name: "Smart Rail, Metro & Suspension Bridge",
    shortLabel: "Rail & Metro",
    icon: Train,
    category: "Transportation",
    color: "#FFB800",
    accentColor: "#F59E0B",
    position: [-38, 5.5, 0],
    markerOffset: [0, 8, 0],
    cameraTarget: {
      position: [-20, 22, 20],
      lookAt: [-38, 5, 0]
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
    position: [-36, 3, -60],
    markerOffset: [0, 9, 0],
    cameraTarget: {
      position: [-18, 22, -40],
      lookAt: [-36, 3, -60]
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
  position: [68, 76, 92],
  lookAt: [0, 3, 0]
};
