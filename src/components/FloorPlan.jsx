import './FloorPlan.css';
import { floorTables } from '../data/mockData';

const statusColors = {
  available: { bg: '#06D6A0', glow: 'rgba(6,214,160,0.4)', label: 'Available' },
  reserved: { bg: '#FFD166', glow: 'rgba(255,209,102,0.4)', label: 'Reserved' },
  occupied: { bg: '#FF6B6B', glow: 'rgba(255,107,107,0.4)', label: 'Occupied' },
};

const FloorPlan = ({ interactive = false, compact = false }) => {
  const tables = compact ? floorTables.slice(0, 8) : floorTables;

  return (
    <div className={`floor-plan ${compact ? 'floor-plan--compact' : ''}`}>
      {/* Legend */}
      <div className="floor-plan__legend">
        {Object.entries(statusColors).map(([key, val]) => (
          <div key={key} className="floor-plan__legend-item">
            <span className="floor-plan__dot" style={{ background: val.bg }} />
            <span>{val.label}</span>
          </div>
        ))}
      </div>

      {/* Floor area */}
      <div className="floor-plan__area">
        {/* Decorative elements */}
        <div className="floor-plan__label floor-plan__label--window">🪟 Window</div>
        <div className="floor-plan__label floor-plan__label--bar">🍸 Bar Area</div>

        {/* Tables */}
        {tables.map((table) => {
          const color = statusColors[table.status];
          return (
            <div
              key={table.id}
              className={`floor-plan__table floor-plan__table--${table.type} ${interactive ? 'floor-plan__table--interactive' : ''} floor-plan__table--${table.status}`}
              style={{
                left: `${table.x}%`,
                top: `${table.y}%`,
              }}
              title={`${table.number} · ${table.seats} seats · ${color.label}`}
            >
              <div
                className="floor-plan__table-inner"
                style={{ background: color.bg, boxShadow: `0 0 0 0 ${color.glow}` }}
              >
                <span className="floor-plan__table-number">{table.number}</span>
                <span className="floor-plan__table-seats">{table.seats}P</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloorPlan;
