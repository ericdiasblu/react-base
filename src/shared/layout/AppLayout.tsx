import "./AppLayout.css";

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="layout-base">
      <div className="layout-header">
        <div className="header-title">
          <h1>To-Do List</h1>
        </div>
        <div className="header-nav">
          <a>Página Inicial</a>
          <a>Usuários</a>
        </div>
      </div>
      {children}
    </div>
  );
};
