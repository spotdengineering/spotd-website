export const Mailer = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  message: string;
  subject: string;
  email: string;
}) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }

        .email-container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .email-header {
            background: linear-gradient(135deg, #ee711f 20%, #e9295c 100%);            color: #ffffff;
            padding: 30px 40px;
            text-align: center;
        }

        .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }

        .email-body {
            padding: 40px;
        
        }


        .field-group {
            margin-bottom: 24px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .message-group {
            margin-bottom: 24px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 6px;
            border-left: 4px solid #d4ea63;
        }

        .field-label {
            font-weight: 600;
            color: #495057;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }

        .field-value {
            font-size: 16px;
            color: #212529;
            word-wrap: break-word;
        }

        .message-field {
            background-color: #ffffff;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            padding: 20px;
        }

        .email-footer {
            background-color: #f8f9fa;
            padding: 20px 40px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
            border-top: 1px solid #e9ecef;
        }



        @media (max-width: 600px) {
            body {
                padding: 10px;
            }

            .email-header,
            .email-body {
                padding: 20px;
            }
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-header">
            <h1>⚠️ New Query Message</h1>
        </div>

        <div class="email-body">
            <div class="field-group">
                <div class="field-label">Full Name</div>
                <div class="field-value">${name}</div>
            </div>
            <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none">
                        ${email}
                    </a>
                </div>
            </div>


            <div class="field-group">
                <div class="field-label">Subject/Reason for Contact</div>
                <div class="field-value">${subject}</div>
            </div>

            <div class="message-group">
                <div class="field-label">Message</div>
                <div class="field-value message-field">${message}</div>
            </div>

        </div>
<br>

        <div class="email-footer">
            <p>This message was sent from the Landing page contact form.</p>
        </div>
    </div>
</body>

</html>
`;
};
