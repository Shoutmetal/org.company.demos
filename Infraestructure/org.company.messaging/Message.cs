﻿using System;

namespace org.company.messaging
{
    public class Message
    {
        public DateTime TimeStamp { get; protected set; }
        public string MessageId { get; protected set; }
    }
}