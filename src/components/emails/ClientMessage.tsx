import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  details: string;
}

export const EmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ name, email, details }) => (
  <div>
    <p>
      {name} ({email}) sent you the following message
    </p>
    <hr />
    <p>{details}</p>
  </div>
);
